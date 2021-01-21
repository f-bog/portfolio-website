import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Hamburger from "./Navigation/mobile/Hamburger"
import logo from "../images/logo.png"

import styled from "styled-components"
import Navigation from "./Navigation/Navigation"

const Header = ({ siteTitle }) => (
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
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
