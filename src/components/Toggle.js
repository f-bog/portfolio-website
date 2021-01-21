import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

export default function Toggle({ toggleTheme, theme }) {
  return (
    <StyledToggle onClick={toggleTheme}>
      {theme ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </StyledToggle>
  )
}

const StyledToggle = styled.div`
  display: block;
  position: fixed;
  z-index: 1000;
  font-size: 2.5em;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.primary};
  padding: 15px;
  bottom: 30px;
  right: 30px;
  box-shadow: 3px 3px 16px -7px rgba(0, 0, 0, 0.75);
  border-radius: 100%;
`
