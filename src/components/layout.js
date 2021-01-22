/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./Footer"
import Toggle from "./Toggle"
import { GlobalStyles } from "./global"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { lightTheme, darkTheme } from "./theme"
import "./layout.css"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("isDark") === "false"
    }
  })

  const toggleTheme = () => {
    if (theme) {
      setTheme(false)
      window.localStorage.setItem("isDark", theme)
    } else {
      setTheme(true)
      window.localStorage.setItem("isDark", theme)
    }
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <GlobalStyles />
        <Header
          siteTitle={data.site.siteMetadata?.title || `Frederick Bogdanoff`}
        />
        <div style={{ marginTop: "100px" }}>
          <main>{children}</main>
        </div>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
