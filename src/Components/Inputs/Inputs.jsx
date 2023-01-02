import React, { useCallback } from "react";
import { StyledInputNumber, StyledInputRadio, StyledInputText, StyledTextArea } from "./StyledInput";

const Inputs = (props) => {
  const { type, placeholder, value, name, id, onChange, rows } = props;

  const getInput = useCallback(() => {
    switch (type) {
      case "number":
        return <StyledInputNumber type={type} placeholder={placeholder} value={value} name={name} id={id} onChange={onChange} />;

      case "radio":
        return <StyledInputRadio type={type} placeholder={placeholder} value={value} name={name} id={id} onChange={onChange} />;
      case "textarea":
        return (
          <StyledTextArea type={type} placeholder={placeholder} value={value} name={name} id={id} onChange={onChange} rows={rows || 4}>
            {value}
          </StyledTextArea>
        );
      default:
        return <StyledInputText type={type} placeholder={placeholder} value={value} name={name} id={id} onChange={onChange} />;
    }
  }, [type, placeholder, value, name, id, onChange, rows]);

  return getInput(type);
};

export default Inputs;
