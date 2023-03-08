import { useEffect } from "react";
import ReactPlayer from "react-player/youtube";

import {
  getCertification,
  getDuration,
  getFormattedReleaseDate,
  getGenres,
  getReleaseYear,
} from "../../utils/utils";

import * as S from "./styles";

import Cast from "@/components/Cast";
import Rating from "@/components/Rating";

import { useMovie } from "@/hooks/useMovie";
import { useRouter } from "next/router";
import Recomendations from "@/components/Recomendations";
import Image from "next/image";

type Crew = {
  credit_id: string;
  name: string;
  department: string;
};

export default function Movie() {
  const {
    query: { movieId },
  } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useMovie(movieId as string);

  if (isLoading) {
    return <p>Loading content ...</p>;
  }
  return (
    <>
      <S.BannerContainer>
        <S.Banner>
          <S.Image>
            <Image
              src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
              alt={data.title}
              width={342}
              height={513}
            />
          </S.Image>
          <S.MovieDescription>
            <h1>
              {data.title} ({getReleaseYear(data)})
            </h1>
            <S.MovieNumbers>
              <p>{getCertification(data)} anos</p>
              <span className="dot">•</span>
              <p>{getFormattedReleaseDate(data)} (BR)</p>
              <span className="dot">•</span>
              <p>{getGenres(data.genres)}</p>
              <span className="dot">•</span>
              <p>{getDuration(data.runtime)}</p>
            </S.MovieNumbers>
            <Rating rating={data.vote_average * 10} />
            <S.Sinopse>
              <h4>Sinopse</h4>
              <p>{data.overview}</p>
            </S.Sinopse>
            <S.Crew>
              {data.credits.crew?.slice(0, 4).map((item: Crew) => (
                <div key={item.credit_id}>
                  {item.name} <br />
                  <span>{item.department}</span>
                </div>
              ))}
            </S.Crew>
          </S.MovieDescription>
        </S.Banner>
      </S.BannerContainer>
      <S.MovieContent>
        <h2>Elenco Original</h2>
        <Cast cast={data.credits.cast.slice(0, 10)} />
        {!!data.videos.results[0]?.key && (
          <S.Trailer>
            <h2>Trailer</h2>
            <ReactPlayer
              controls
              width="100%"
              height="100%"
              url={`https://www.youtube.com/watch?v=${data.videos.results[0].key}`}
            />
          </S.Trailer>
        )}
        {data.recommendations.results.length > 0 && (
          <>
            <h2 className="recomendations">Recomendações</h2>
            <Recomendations
              recomendations={data.recommendations.results.slice(0, 6)}
            />
          </>
        )}
      </S.MovieContent>
    </>
  );
}
