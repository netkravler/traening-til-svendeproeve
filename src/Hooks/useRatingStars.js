import React, { useMemo } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const useRatingStars = (grade) => {
  const stars = useMemo(() => {
    return [...Array(5)].map((_, i) => (
      <StyledRatingButton rating={grade} Index={i} key={i}>
        <FaStar />
      </StyledRatingButton>
    ));
  }, [grade]);

  return { stars };
};

const StyledRatingButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  color: ${(props) => (props.rating > props.Index ? ({ theme }) => theme.ratingStars.starOn : ({ theme }) => theme.ratingStars.starOff)};
  svg {
    font-size: ${({ theme }) => theme.ratingStars.size};
  }
`;
