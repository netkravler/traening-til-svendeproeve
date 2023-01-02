import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { usePaginate } from "../../Hooks/usePaginate";

import PaginationNavigation from "./PaginationNavigation";
import { usePaginationStore } from "./usePaginationStore";

const Pagination = ({ items }) => {
  const { setPagination } = usePaginationStore();

  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    setApiData(items);
  }, [items]);

  // custom hook for pagnination
  // takes array you wish to paginate through and itemsperpage, and the current page
  // it returns a chunk of data at the index of the current page and the total number of pages.
  const { state, numberOfPages  } = usePaginate(apiData, itemsPerPage, currentPage);

  useEffect(() => {
    setPagination(state);
  }, [state, setPagination]);

  return (
    <StyledPagination>
      {state && (
        <PaginationNavigation
          numberOfPages={numberOfPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setItemsPerPage={setItemsPerPage}
          itemsPerPage={itemsPerPage}
        />
      )}
    </StyledPagination>
  );
};

export default Pagination;

const StyledPagination = styled.article`
  padding: ${({ theme }) => theme.mainsettings.containerPadding};
`;
