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
        <AnimatedLink to="/" activeClassName="active">
          Home
        </AnimatedLink>
        <AnimatedLink to="/about" activeClassName="active">
          About
        </AnimatedLink>
        <AnimatedLink to="/portfolio" activeClassName="active">
          Portfolio
        </AnimatedLink>
        <AnimatedLink to="/contact" activeClassName="active">
          Contact
        </AnimatedLink>
      </nav>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(animated.div)`
  display: flex;
  position: absolute;
  top: 80px;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 100%;
  transform: translateX(100%);
  .active {
    color: rgb(103, 103, 103);
  }
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
      padding: 0px 1em 1em 1em;
      text-decoration: none;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
export default Drawer
