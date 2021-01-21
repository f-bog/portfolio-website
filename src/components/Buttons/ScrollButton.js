import React from "react"
import styled from "styled-components"
function ScrollButton({ text, scrollRef }) {
  const scrollToRef = () => scrollRef.current.scrollIntoView()
  return <StyledButton onClick={scrollToRef}>{text}</StyledButton>
}

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  font-weight: 600;
  text-decoration: none;
  background: #5a5757;
  background: linear-gradient(
    90deg,
    #4d4d4d 0%,
    rgba(103, 103, 103, 1) 50%,
    #4d4d4d 100%
  );
  background-size: 200% auto;
  background-position: 0%;
  min-width: 150px;
  border-radius: 5px;
  padding: 13px;
  text-align: center;

  transition: background 0.8s ease;
  &:hover {
    background-position: right center;
  }
`
export default ScrollButton
