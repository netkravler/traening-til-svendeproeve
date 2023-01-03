import styled from "styled-components";
import { color, variant, textShadow } from "styled-system";

const variants = {
  female: {
    backgroundColor: "#A60A55",
    "&:hover": {
      backgroundColor: "#A60A5580",
    },
  },
  male: {
    backgroundColor: "#4577A0",
    "&:hover": {
      backgroundColor: "#4577A080",
    },
  },
};

export const StyledUserBlock = styled.figure(
  {
    color: "white",
    padding: "0.8rem",
    transition: "transform .5s ease-in-out",
    cursor: "pointer",
    textTransform: "uppercase",
    border: "none",
    img: {
      width: "100%",
    },
    "&:hover": {
      transform: "scale(1.04)",
    },
  },
  variant({ variants, prop: "gender" }),
  color,
  textShadow
);

StyledUserBlock.defaultProps = {
  variant: "male",
};
