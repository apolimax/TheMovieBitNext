import { Movies } from "@/types/types";
import MoviesItem from "../MovieItem";
import * as S from "./styles";

type MoviesListContainerProps = {
  movies: Movies;
};

export default function MoviesListContainer({
  movies,
}: MoviesListContainerProps) {
  return (
    <S.MoviesListContainer>
      {movies.map((movie) => (
        <MoviesItem key={movie.id} {...movie} />
      ))}
    </S.MoviesListContainer>
  );
}
