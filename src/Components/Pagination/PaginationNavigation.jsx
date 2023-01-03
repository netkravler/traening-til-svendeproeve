import React from "react";
import styled from "styled-components";

const PaginationNavigation = ({ numberOfPages, itemsPerPage, setItemsPerPage, setCurrentPage, currentPage }) => {
  const handleOnchange = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(1);
  };

  return (
    <StyledPaginateSelector>
      <select defaultValue={12} selected={itemsPerPage} onChange={handleOnchange}>
        <option disabled>Antal pr. side </option>
        {[4, 8, 12, 16, 20].map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
      <span>
        {[...Array(numberOfPages)].map((_, i) => (
          <button onClick={() => setCurrentPage(i + 1)} key={i}>
            {i + 1}
          </button>
        ))}
      </span>
    </StyledPaginateSelector>
  );
};

export default PaginationNavigation;

const StyledPaginateSelector = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 1rem;
    display: flex;
    gap: 5px;
    button {
      cursor: pointer;
      flex: 1;
      width: 1.4rem;
      border: none;
      border-radius: 50%;
      aspect-ratio: 1/1;
      transition: all 0.5s ease-in-out;
      background-color: ${({ theme }) => theme.colors.tertiary};
      color: ${({ theme }) => theme.colors.onTertiary};

      &:hover {
        transform: scale(1.2);
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
