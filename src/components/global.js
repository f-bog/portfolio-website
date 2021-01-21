import { createGlobalStyle } from "styled-components"
import { config, dom } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
export const GlobalStyles = createGlobalStyle`
${dom.css()}
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
