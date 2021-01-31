import React from "react"
import styled from "styled-components"

function Section({ children, background, eleRef }) {
  return (
    <StyledSection background={background} ref={eleRef}>
      <div className="section-content">{children}</div>
    </StyledSection>
  )
}
const StyledSection = styled.section`
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 900;
  background: ${props =>
    props.background === "secondary"
      ? ({ theme }) => theme.primary
      : ({ theme }) => theme.secondary}
  }};
  align-items: center;
  .section-content {
    height: 100%;
    max-width: 1260px;
    margin: 100px 0px;
    padding: 1.45rem;
  }
  @media only screen and (min-width: 768px) {
    .section-content {
      width: 90%;
      margin: 100px 50px;
    }
  }
`
export default Section
