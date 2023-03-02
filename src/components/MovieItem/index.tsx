import { Movie } from "@/types/types";
import Image from "next/image";
import * as S from "./styles";

export default function MoviesItem({ ...movie }: Movie) {
  return (
    <div>
      <S.MovieItemContainer onClick={() => {}}>
        <Image
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.title}</p>
        <S.Date>
          {new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(
            new Date(movie.release_date)
          )}
        </S.Date>{" "}
      </S.MovieItemContainer>
    </div>
  );
}
