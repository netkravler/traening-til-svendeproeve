import styled from "styled-components";
import { color, variant } from "styled-system";

const variants = {
  h1: { color: "red", fontSize: "3em", lineHeight: "3rem" },
  h2: { color: "green", fontSize: "2.2rem", lineHeight: "2.2rem" },
  h3: { color: "blue", fontSize: "2rem" },
  h4: { color: "teal", fontSize: "1.6669rem", fontWeight: 900 },
  h5: { color: "purple", fontSize: "1.18rem" },
  h6: { color: "lime", fontSize: ".9rem" },
};

export const Heading = styled.h1({}, variant({ variants, prop: "as" }), color);
