import styled, { css } from "styled-components";
import media from "styled-media-query";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightPurple};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;

    img {
      cursor: pointer;
    }

    ${media.greaterThan("medium")`
      display: block;
      padding: 16px 112px;
    `}
  `}
`;
