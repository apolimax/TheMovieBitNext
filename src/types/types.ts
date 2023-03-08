type Category = {
  id: number;
  name: string;
};

type Genres = Category[];

type Movie = {
  poster_path: string;
  title: string;
  release_date: string;
  release_dates?: {
    results: {
      iso_3166_1: string;
      release_dates: {
        certification: string;
        release_date: Date;
      }[];
    }[];
  };
  id: number;
  genre_ids: number[];
};

type Movies = Movie[];

export type { Category, Genres, Movie, Movies };
