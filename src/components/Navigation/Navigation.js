import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

function Navigation() {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: none;
  button {
    background: none;
    border: none;
    font-size: 1.5em;
    color: grey;
  }
  a {
    font-size: 1em;
    font-weight: 600;
    display: inline-block;
    padding: 10px;
    margin: 0 20px;
    text-decoration: none;
    ${"" /* color: white; */}
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`

export default Navigation
