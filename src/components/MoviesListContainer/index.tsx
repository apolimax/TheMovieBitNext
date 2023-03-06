import { Movie } from "@/types/types";
import MoviesItem from "../MovieItem";
import * as S from "./styles";

type MoviesListContainerProps = {
  movies: Movie[];
};

export default function MoviesListContainer({
  movies,
}: MoviesListContainerProps) {
  if (movies.length === 0) {
    return (
      <S.MoviesListContainerNoMovie>
        <h2>
          Nenhum filme encontrado com os filtro(s) selecionado(s) nesta página
        </h2>
      </S.MoviesListContainerNoMovie>
    );
  }

  return (
    <S.MoviesListContainer>
      {movies.map((movie) => (
        <MoviesItem key={movie?.id} {...movie} />
      ))}
    </S.MoviesListContainer>
  );
}
