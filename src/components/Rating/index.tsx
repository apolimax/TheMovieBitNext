import * as S from "./styles";

export default function Rating({ rating }: { rating: number }) {
  return (
    <S.Box rating={rating}>
      <div className="percent">
        <svg>
          <circle cx="70" cy="70" r="23.3"></circle>
          <circle cx="70" cy="70" r="23.3"></circle>
        </svg>
        <div className="number">
          <h2>
            {rating.toFixed(1)}
            <span>%</span>
          </h2>
        </div>
        <p className="text">Avaliação dos usuários</p>
      </div>
    </S.Box>
  );
}
