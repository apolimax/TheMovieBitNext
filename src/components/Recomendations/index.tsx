import { Movies } from "@/types/types";
import MoviesItem from "../MovieItem";
import * as S from "./styles";

type RecomendationsProps = {
  recomendations: Movies;
};

export default function Recomendations({
  recomendations,
}: RecomendationsProps) {
  return (
    <S.RecomendationsContainer>
      {recomendations.map((movie) => (
        <div key={movie.id}>
          {!!movie.release_date && ( // some movies doesn't have release date, so I'm showing only the ones that has release date
            <MoviesItem {...movie} />
          )}
        </div>
      ))}
    </S.RecomendationsContainer>
  );
}
