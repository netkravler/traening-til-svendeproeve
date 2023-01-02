import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import {isMobile} from 'react-device-detect';

const HandleHTag = (props) => {
  const themeContext = useContext(ThemeContext);

  switch (props.as) {
    case "h2":
      return `       
      font-family:  ${themeContext.fonts.secondary}; 
      font-size:    ${themeContext.headerSizes.h2.fontSize};
      line-height:  ${themeContext.headerSizes.h2.lineHeight};
      color:        ${props.color || themeContext.headerSizes.h2.color };
      `;

    case "h3":
      return `       
      font-family:  ${themeContext.fonts.primary}; 
      font-size:    ${themeContext.headerSizes.h3.fontSize};
      line-height:  ${themeContext.headerSizes.h3.lineHeight};
      color:        ${props.color || themeContext.headerSizes.h3.color};
      `;

    case "h4":
      return `       
      font-family:  ${themeContext.fonts.primary}; 
      font-size:    ${themeContext.headerSizes.h4.fontSize};
      line-height:  ${themeContext.headerSizes.h4.lineHeight};
      color:        ${props.color || themeContext.headerSizes.h4.color};
      `;

    case "h5":
      return `       
      font-family:  ${themeContext.fonts.primary}; 
      font-size:    ${themeContext.headerSizes.h5.fontSize};
      line-height:  ${themeContext.headerSizes.h5.lineHeight};
      color:        ${props.color || themeContext.headerSizes.h5.color};
      `;

    case "h6":
      return `       
      font-family:  ${themeContext.fonts.primary}; 
      font-size:    ${themeContext.headerSizes.h6.fontSize};
      line-height:  ${themeContext.headerSizes.h6.lineHeight};
      color:        ${props.color || themeContext.headerSizes.h6.color};
      `;

    default:
      return `
      font-family:  ${themeContext.fonts.secondary};
      font-size:    ${themeContext.headerSizes.h1.fontSize}; 
      line-height:  ${themeContext.headerSizes.h1.lineHeight};
      color:        ${props.color || themeContext.headerSizes.h1.color};
      `;
  }
};

export const Heading = styled.h1`
  ${(props) => HandleHTag(props)};
  margin: ${(props) => props.margin || null};
  display: ${(props) => props.invisible && !isMobile ? "none" : "block"};
 
  padding: ${(props) => props.padding || null};
  ${(props) => props.uc && "text-transform: uppercase;"}
  ${(props) => props.tc && "text-align: center;"}
`;
