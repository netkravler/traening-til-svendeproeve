import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 2rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.tertiary};

  color: ${({ theme }) => theme.colors.onTertiary};

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  address {
    font-style: normal;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

export const StyledFooterSection = styled.section`
  width: 100%;

  section {
    @media all and (min-width: 768px) {
      background-color: ${({ theme }) => theme.colors.background};
    }
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;
