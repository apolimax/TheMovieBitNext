import styled from "styled-components";

export const MovieItemContainer = styled.div`
  cursor: pointer;

  img {
    border-radius: 4px;
    transition: all 0.2s ease-out;

    &:hover {
      transform: scale(1.05);
      -webkit-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
    }
  }

  p {
    max-width: 154px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Date = styled.p`
  color: #646464;
`;
