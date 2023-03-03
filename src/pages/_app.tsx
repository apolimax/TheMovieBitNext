import MoviesContextProvider from "@/store/moviesContext";
import GlobalStyle from "@/styles/Global";
import Theme from "@/styles/Theme";
import type { AppProps } from "next/app";

import Base from "./Base";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <MoviesContextProvider>
        <Base>
          <Component {...pageProps} />
        </Base>
      </MoviesContextProvider>
    </Theme>
  );
}
