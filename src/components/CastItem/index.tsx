import { Actor } from "@/types/types";
import Image from "next/image";
import * as S from "./styles";

type CastItemProps = {
  actor: Actor;
};

export default function CastItem({ actor }: CastItemProps) {
  return (
    <S.CastItemContainer>
      {!!actor.profile_path && (
        <>
          <Image // only show actor if he/she has profile photo
            className="h-full"
            src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
            alt={actor.name}
            width={185}
            height={298}
          />
          <p className="actor_name">{actor.name}</p>
          <p className="actor_character">{actor.character}</p>
        </>
      )}
    </S.CastItemContainer>
  );
}
