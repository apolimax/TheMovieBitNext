import { Genres, Movie } from "@/types/types";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import api from "../api/api";

type MoviesContextType = {
  movies: (Movie | null)[];
  genres: Genres;
  activeGenres: number[];
  setActiveGenres: Dispatch<SetStateAction<never[]>>;
  getMoviesByGenres: (genres: number[]) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  getPopularMovies: (currentPage: number) => void;
};

const MoviesContext = createContext({} as MoviesContextType);

type MoviesContextProviderType = {
  children: React.ReactNode;
};

export default function MoviesContextProvider({
  children,
}: MoviesContextProviderType) {
  const [movies, setMovies] = useState<(Movie | null)[]>([]);
  const [mostPopularsContext, setMostPopularsContext] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genres>([]);
  const [activeGenres, setActiveGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //console.log("currentPage", currentPage);
  //console.log({ movies });

  //const [isLoading, setIsLoading] = useState(true);

  //console.log("activeGenres", activeGenres);

  console.log({ movies });
  console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY);

  async function getPopularMovies(currentPage: number) {
    try {
      const response = await api.get(
        `movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR&page=${currentPage}`
      );

      if (response.status !== 200) {
        console.log("oiiii");
        throw new Error("Failed to load the data from the API");
      }

      const {
        data: { results },
      } = response;

      setMovies(results);
      setMostPopularsContext(results); // I won't change its state inside the app. I'll only use it to set the new state from the filters.
      //setIsLoading(false);
    } catch (err) {
      console.log("err", err);
      //setIsLoading(false);
    }
  }

  console.log({ genres });

  useEffect(() => {
    async function getGenres() {
      try {
        const response = await api.get(
          `genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`
        );

        if (response.status !== 200) {
          throw new Error("Failed to load the data from the API");
        }

        const {
          data: { genres },
        } = response;
        setGenres(genres);
        //setIsLoading(false);
      } catch (err) {
        console.log("err", err);
        //setIsLoading(false);
      }
    }

    getPopularMovies(currentPage);
    getGenres();
  }, [currentPage]);

  function getMoviesByGenres(genres: number[]) {
    if (genres.length === 0) {
      getPopularMovies(currentPage);
    }

    const newPopularMoviesByGenres = mostPopularsContext
      .flatMap((movie) =>
        movie.genre_ids.flatMap((genre_id) =>
          genres.map((genre) => {
            if (genre_id === genre) return movie;
            return null;
          })
        )
      )
      .filter((movie) => movie);

    const newPopularMoviesByGenresSet = Array.from(
      new Set(newPopularMoviesByGenres)
    );
    // TODO: if there are no movie found by the selected genre, show message
    setMovies(newPopularMoviesByGenresSet);
  }

  // console.log("mostPopulars", mostPopulars);
  // console.log("activeGenres", activeGenres);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        //isLoading,
        genres,
        activeGenres,
        setActiveGenres,
        getMoviesByGenres,
        currentPage,
        setCurrentPage,
        getPopularMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovieContext() {
  const moviesContext = useContext(MoviesContext);

  return moviesContext;
}
