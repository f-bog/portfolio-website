import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"

export default function Toggle({ toggleTheme, theme }) {
  return (
    <StyledToggle onClick={toggleTheme}>
      <FontAwesomeIcon icon={faLightbulb} />
      <p>{theme === "light" ? "Dark" : "Light"}</p>
    </StyledToggle>
  )
}

const StyledToggle = styled.button`
  border: none;
  display: block;
  text-align: center;
  position: fixed;
  z-index: 1000;
  padding: 15px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.primary};
  font-size: 1.5em;
  width: 80px;
  height: 80px;
  bottom: 30px;
  right: 30px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  p {
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    margin: 0;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
