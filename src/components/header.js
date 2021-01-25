import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Hamburger from "./Navigation/mobile/Hamburger"
import logo from "../images/logo.png"

import styled from "styled-components"
import Navigation from "./Navigation/Navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
const Header = ({ siteTitle, theme, toggleTheme }) => (
  <StyledHeader>
    <div
      className="header-container"
      style={{
        margin: `0 auto`,
        maxWidth: 1260,
      }}
    >
      <Link to="/">
        <img alt="logo" className="header-logo" src={logo} width="50px" />
      </Link>

      <Hamburger className="hamburger" />
      <Navigation />
      <button className="toggleTheme" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faLightbulb} />
        <p>{theme === "light" ? "Dark" : "Light"}</p>{" "}
      </button>
    </div>
  </StyledHeader>
)

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0px;
  z-index: 999;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  .toggleTheme {
    display: none;
  }
  .header-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    padding: 0;
    margin: 10px;
  }
  @media only screen and (min-width: 768px) {
    .header-container {
      max-width: 1260px;
    }
    .toggleTheme {
      display: block;
      text-align: center;
      border: none;
      color: ${({ theme }) => theme.text};
      background: ${({ theme }) => theme.secondary};
      font-size: 1.5em;
      p {
        font-size: 14px;
        font-weight: 600;
        margin: 0;
        padding: 0;
      }
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
