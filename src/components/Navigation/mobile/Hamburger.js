import React from "react"
import styled from "styled-components"
import Drawer from "./Drawer"
import { useToggle } from "../../../hooks/useToggle"
// import { useSpring, animated } from "react-spring"

function Hamburger() {
  const [toggle, handleToggle] = useToggle()

  return (
    <>
      <StyledHamburger onClick={handleToggle}>
        <div />
        <div />
        <div />
      </StyledHamburger>
      <Drawer toggle={toggle} />
    </>
  )
}

const StyledHamburger = styled.button`
  background: none;
  border: none;
  div {
    background: ${({ theme }) => theme.text};
    width: 32px;
    margin: 6px 0px;
    height: 4px;

    border-radius: 2px;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export default Hamburger
