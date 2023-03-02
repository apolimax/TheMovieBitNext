import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    lightPurple: "#5c16c5",
    darkPurple: "#2d0c5e",
    caramel: "#D18000",
    gray: "#646464;",
  },
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const Theme = ({ children }: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
