import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

function Footer() {
  return (
    <StyledFooter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="credits">
        <p>
          © Copyright {new Date().getFullYear()} · Frederick Bogdanoff · All
          Rights Reserved
        </p>
      </div>
    </StyledFooter>
  )
}
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background: ${({ theme }) => theme.primary};
  .credits {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    background: ${({ theme }) => theme.secondary};
    font-size: 0.8em;
    color: ${({ theme }) => theme.text};
    p {
      margin: 10px;
    }
  }
  nav {
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
    a {
      color: ${({ theme }) => theme.text};
      font-weight: 600;
      margin: 30px;
      text-decoration: none;
    }
  }
  @media only screen and (min-width: 768px) {
    nav {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`

export default Footer
