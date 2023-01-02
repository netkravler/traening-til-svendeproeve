
import styled from 'styled-components';

export const ContentWrapper = styled.section`
  padding: 0 1rem;
  @media all and (min-width: 768px) {
    padding: 0 calc(2.5 * ${({ theme }) => theme.mainsettings.containerPadding});
  }
`;