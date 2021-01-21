import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

function Drawer({ toggle }) {
  const props = useSpring({
    transform: toggle ? "translateX(0%)" : "translateX(100%)",
    opacity: toggle ? 1 : 0,
  })
  const AnimatedLink = animated(Link)
  return (
    <StyledDrawer style={props}>
      <nav>
        <AnimatedLink to="/">Home</AnimatedLink>
        <AnimatedLink to="/about">About</AnimatedLink>
        <AnimatedLink to="/portfolio">Portfolio</AnimatedLink>
        <AnimatedLink to="/contact">Contact</AnimatedLink>
      </nav>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(animated.div)`
  display: flex;
  position: absolute;
  top: 100px;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  height: 90vh;
  width: 100%;
  transform: translateX(100%);
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 360px;
    text-align: center;
    font-size: 1.5em;
    font-weight: 600;
    a {
      color: white;
      padding: 1em;
      text-decoration: none;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
export default Drawer
