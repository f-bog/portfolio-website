/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./Footer"
import Toggle from "./Toggle"
import { GlobalStyles } from "./global"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { lightTheme, darkTheme } from "./theme"
import "./layout.css"
import { useLightMode } from "../hooks/useLightMode"

import { Transition } from "react-spring/renderprops"

const Layout = ({ children }) => {
  const [theme, toggleTheme, mountedComponent] = useLightMode()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (!mountedComponent) return <div style={{ height: "100vh" }} />

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <GlobalStyles />
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          siteTitle={data.site.siteMetadata?.title || `Frederick Bogdanoff`}
        />
        <div style={{ marginTop: "80px" }}>
          <Transition
            from={{ opacity: 0, transform: "scale(1.1)" }}
            enter={{ opacity: 1, transform: "scale(1)" }}
            leave={{ opacity: 0, transform: "scale(1.1)" }}
          >
            {() => style => <main style={style}>{children}</main>}
          </Transition>
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
