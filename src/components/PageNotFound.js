import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function PageNotFound() {
  return (
    <StyledContainer>
      <h1 style={{ fontStyle: "italic" }}>
        {"<"}
        <span>404</span> {"page="}
        <span>"Not Found"</span>
        {" />"}
      </h1>
      <p>Uh oh! Can't find the page you are looking for.</p>
      <Link to="/">Back to home</Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  text-align: center;

  h1 {
    font-family: "Montserrat";
    font-size: 3em;
  }
  a {
    color: white;
  }
`

export default PageNotFound
