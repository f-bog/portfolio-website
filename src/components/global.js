import { createGlobalStyle } from "styled-components"
import { config, dom } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
export const GlobalStyles = createGlobalStyle`
${dom.css()}
body {
  background: ${({ theme }) => theme.dark};
  font-family: "Montserrat";
  color: ${({ theme }) => theme.text};
  transition: all 0.2s linear;
}
a {
  color: ${({ theme }) => theme.text};
}
  span{
  color: #e80583;
  display: inline-block;
  }

`
