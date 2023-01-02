import styled from "styled-components";

const StyledInputBasic = styled.input`
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`;

export const StyledInputText = styled(StyledInputBasic).attrs({ type: "text" })``;

export const StyledInputHidden = styled(StyledInputBasic).attrs({ type: "hidden" })``;

export const StyledInputNumber = styled(StyledInputBasic).attrs({ type: "number" })``;

export const StyledInputRadio = styled(StyledInputBasic).attrs({ type: "radio" })`
  display: grid;
  place-content: center;
  accent-color: rgba(255, 255, 255, 1);

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #9c27b0;
  }

  &:checked::before {
    transform: scale(1);
    border: none;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;

`;
