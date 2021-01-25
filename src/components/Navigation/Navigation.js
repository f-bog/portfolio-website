import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

function Navigation() {
  return (
    <StyledNav>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/about" activeClassName="active">
        About
      </Link>
      <Link to="/portfolio" activeClassName="active">
        Portfolio
      </Link>
      <Link to="/contact" activeClassName="active">
        Contact
      </Link>
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
  .active {
    color: rgb(103, 103, 103);
  }
  a {
    font-size: 1em;
    font-weight: 600;
    display: inline-block;
    padding: 10px;
    margin: 0 20px;
    text-decoration: none;
    ${"" /* color: white; */}
    transition: color 0.2s linear;
    &:hover {
      color: rgb(103, 103, 103);
    }
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`

export default Navigation
