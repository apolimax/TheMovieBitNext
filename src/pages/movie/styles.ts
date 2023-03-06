import styled from "styled-components";
import media from "styled-media-query";

export const BannerContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkPurple};
  padding: 40px 20px 80px 20px;
  /* margin-bottom: 30px; */

  ${media.greaterThan("medium")`
    padding: 40px 20px 0 20px;
  `}
`;

export const Banner = styled.div`
  /* padding-top: 30px; */
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;

  /* margin: 0 auto; */

  ${media.greaterThan("medium")`
    flex-direction: row;
    justify-content: center;

    img {
      margin-bottom: -40px;
    }
  `}
`;

export const Image = styled.div`
  margin: 0 auto;
  img {
    border-radius: 8px;
  }

  ${media.greaterThan("medium")`
    margin: 0;
  `}
`;

export const MovieDescription = styled.div`
  color: #fff;
  h1 {
    max-width: 342px;
  }
`;

export const MovieNumbers = styled.div`
  .dot {
    display: none;
  }

  ${media.greaterThan("large")`
    display: flex;
    gap: 7px;

    .dot {
      display: block;
    }
  `}
`;

export const Sinopse = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;

  p {
    max-width: 500px;
  }
`;

export const Crew = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;

  span {
    font-weight: 700;
  }
`;

export const MovieContent = styled.div`
  padding: 0 0 0 20px;

  h2 {
    margin-top: 40px;
    margin-bottom: 10px;

    &.recomendations {
      margin-top: 80px;
    }
  }

  ${media.greaterThan("medium")`
    margin: 70px 60px 80px;;
  `}
`;

export const Trailer = styled.div`
  height: 250px;
  ${media.greaterThan("large")`
    width: 60%;
    height: 510px;
  `}
`;
