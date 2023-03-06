import React from "react";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import MoviesContextProvider from "@/store/moviesContext";
import Theme from "@/styles/Theme";
import GlobalStyle from "@/styles/Global";

import Base from "./Base";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Theme>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MoviesContextProvider>
            <Base>
              <Component {...pageProps} />
            </Base>
          </MoviesContextProvider>
        </Hydrate>
      </QueryClientProvider>
    </Theme>
  );
}
