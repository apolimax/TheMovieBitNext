type Category = {
  id: number;
  name: string;
};

type Genres = Category[];

type Movie = {
  poster_path: string;
  title: string;
  release_date: string;
  id: number;
  genre_ids: number[];
};

type Movies = Movie[];

export type { Category, Genres, Movie, Movies };
