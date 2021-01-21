import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
body {
  font-family: "Montserrat";
  color: ${({ theme }) => theme.text};
  transition: all 0.2s ease-in-out;
}
a {
  color: ${({ theme }) => theme.text};
}
  span{
  color: #e80583;
  display: inline-block;
  }

`
