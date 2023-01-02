import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinks = styled(Link)`
  //font-size: 1.33rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.primary)};
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
