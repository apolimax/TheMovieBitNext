import { Movie } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

export default function MoviesItem({ ...movie }: Movie) {
  return (
    <S.MovieItemContainer onClick={() => {}}>
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          alt={movie.title}
          width={154}
          height={231}
        />
        <p>{movie.title}</p>
        <S.Date>
          {new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(
            new Date(movie.release_date)
          )}
        </S.Date>{" "}
      </Link>
    </S.MovieItemContainer>
  );
}
