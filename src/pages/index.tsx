import FiltersContainer from "@/components/FiltersContainer";
import MoviesListContainer from "@/components/MoviesListContainer";
import Pagination from "@/components/Pagination";
import { useMovieContext } from "@/store/moviesContext";
import Head from "next/head";

export default function Home() {
  const { movies, genres, setCurrentPage, setActiveGenres } = useMovieContext();

  function changePage({ selected }: { selected: number }) {
    setCurrentPage(selected + 1);
    setActiveGenres([]); // everytime someone changes the page, the active genres array must be erased
  }

  return (
    <>
      <Head>
        <title>TheMovieBit</title>
        <meta
          name="description"
          content="Search and see your favorite movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FiltersContainer genres={genres} />
      <MoviesListContainer movies={movies} />
      <Pagination changePage={changePage} />
    </>
  );
}
