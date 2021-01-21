import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
function Button({ text, path, accent, center }) {
  return (
    <StyledButton to={path} center={center} accent={accent}>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled(Link)`
  min-width: 150px;
  margin: ${props => (props.center ? "0px auto" : "10px")};
  display: ${props => (props.center ? "block" : "inline-block")};
  width: ${props => props.center && "150px"};
  border-radius: 5px;
  padding: 13px;
  text-align: center;

  transition: background 0.8s ease;
  background: ${props => (props.accent ? "rgb(252, 0, 87)" : "#5a5757")};
  background: ${props =>
    props.accent
      ? `linear-gradient(
              90deg,
              rgba(252, 0, 87, 1) 0%,
              rgba(199, 16, 206, 1) 50%,
              rgba(252, 0, 87, 1) 100%
            )`
      : `linear-gradient(
              90deg,
              #4d4d4d 0%,
              rgba(103,103,103,1) 50%,
              #4d4d4d 100%
              )`};
  background-size: 200% auto;
  background-position: 0%;
  color: white;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-position: right center;
  }

  @media only screen and (min-width: 768px) {
    margin: ${props => (props.center ? "0px auto" : "0px")};
  }
`

export default Button
