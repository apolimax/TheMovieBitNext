import ReactPaginate from "react-paginate";

import * as S from "./styles";

type PaginationProps = {
  changePage: (selectedItem: { selected: number }) => void;
};

export default function Pagination({ changePage }: PaginationProps) {
  return (
    <S.Pagination>
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Próxima"}
        pageCount={5}
        onPageChange={changePage}
      />
    </S.Pagination>
  );
}
