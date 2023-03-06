import { useMovieContext } from "@/store/moviesContext";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./styles";

export default function Header() {
  const router = useRouter();

  const { getPopularMovies, setCurrentPage } = useMovieContext();

  function goToHome() {
    if (router.asPath === "/") {
      // if the user is already on the home page there's no need to go to home
      return;
    }

    setCurrentPage(1);
    getPopularMovies(1);
    router.push("/");
  }

  return (
    <S.HeaderContainer onClick={goToHome}>
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
