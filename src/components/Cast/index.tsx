import { Actor } from "@/types/types";
import CastItem from "../CastItem";
import * as S from "./styles";

type CastProps = {
  cast: Actor[];
};

export default function Cast({ cast }: CastProps) {
  return (
    <S.CastContainer>
      {cast.map((actor) => (
        <CastItem key={actor.id} actor={actor} />
      ))}
    </S.CastContainer>
  );
}
