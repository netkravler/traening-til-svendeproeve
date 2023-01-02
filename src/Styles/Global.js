import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{

  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;

  margin: 0;
  padding: 0;


}

html, body{
border: none;
  width: 100%;
  height: 100% ;

}

#root{
  border: none;
  min-height: 100%;
    display: grid;  
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;



}

body{

  background-color: ${({ theme }) => theme.colors.background};

  color: ${({ theme }) => theme.colors.onBackground};
  overflow-y: scroll;
}

p, pre {
  //font-family: ${({ theme }) => theme.fonts.primary};
  font-size : 2.17rem;
  color: ${({ theme }) => theme.colors.primary};
  -webkit-font-smoothing: antialiased;
}
img{
  display: block;
}

`;
