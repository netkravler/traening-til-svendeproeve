import styled from "styled-components";

export const StyledMainSection = styled.section`
  width: 100%;

  section {
    @media all and (min-width: 768px) {
      background-color: ${({ theme }) => theme.colors.background};
    }
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;
