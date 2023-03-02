import Image from "next/image";
import * as S from "./styles";

export default function Header() {
  return (
    <S.HeaderContainer>
      <Image
        src="/TDMBLogo.svg"
        alt="TMDB logo"
        aria-label="TMDB logo"
        width={185}
        height={25}
      />
    </S.HeaderContainer>
  );
}
