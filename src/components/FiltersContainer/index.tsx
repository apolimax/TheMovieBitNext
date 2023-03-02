import { Genres } from "@/types/types";
import Button from "../Button";

import * as S from "./styles";

type FiltersContainerProps = {
  genres: Genres;
};

export default function FiltersContainer({ genres }: FiltersContainerProps) {
  return (
    <S.FiltersContainer>
      <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
      <p>FILTRE POR:</p>
      <S.CategoryButtonsWrapp>
        {genres.map((category) => (
          <Button key={category.id} category={category} />
        ))}
      </S.CategoryButtonsWrapp>
    </S.FiltersContainer>
  );
}
