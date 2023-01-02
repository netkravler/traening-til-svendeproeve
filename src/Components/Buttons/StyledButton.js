import styled from "styled-components";
import { color, space, fontSize, buttonStyle, variant } from "styled-system";

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes",
});

export const StyledButton = styled.button`
  display: inline-block;
  padding: 0.8rem;

  cursor: pointer;
  text-transform: uppercase;
  font-weight: 900;
  border: none;

  ${color}
  ${space}
  ${fontSize}
  ${buttonStyle}
  ${buttonSize}
`;

StyledButton.defaultProps = {
  variant: "primary",
};
