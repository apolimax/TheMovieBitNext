import { useMovieContext } from "@/store/moviesContext";
import { Category } from "@/types/types";
import { useState, useEffect } from "react";

import { AiFillCloseCircle } from "react-icons/ai";

import * as S from "./styles";

type ButtonProps = {
  category: Category;
};

export default function Button({ category }: ButtonProps) {
  const { activeGenres, setActiveGenres, getMoviesByGenres, currentPage } =
    useMovieContext();

  const [isGenreActive, setIsGenreActive] = useState(false);

  useEffect(() => {
    setIsGenreActive(false); // everytime someone changes the page, the selected genres must be undone
  }, [currentPage]);

  //console.log("activeGenres: ", activeGenres);

  function addCategory() {
    if (isGenreActive) {
      setIsGenreActive(false);

      // filtering out a genre when clicked the second time
      const newActiveGenres = activeGenres.filter(
        (item) => item !== category.id
      );
      setActiveGenres(newActiveGenres);
      getMoviesByGenres(newActiveGenres);
    } else {
      const newActiveGenres = [...activeGenres, category.id];
      setActiveGenres(newActiveGenres);
      getMoviesByGenres(newActiveGenres);
      setIsGenreActive(true);
    }
  }

  return (
    <S.ButtonWrapper highlight={isGenreActive} onClick={addCategory}>
      <span>{category.name}</span>
      {isGenreActive && <AiFillCloseCircle color="#FFF" size={12} />}
    </S.ButtonWrapper>
  );
}
