import React from "react"
import styled, { keyframes } from "styled-components"
import { useSpring, animated } from "react-spring"
import Button from "./Buttons/Button"
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

export default function Box() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
  }))
  return (
    <>
      <StyledBox
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className="border-outside"
          style={{ transform: props.xy.interpolate(trans) }}
        >
          <div className="border-inside"></div>
        </animated.div>
        <div className="content">
          <h2>
            <span>About</span> Me.
          </h2>
          <p>
            Hi, my name is Frederick Bogdanoff. I am a Front-End Developer with
            a strong love for design.
          </p>
          <p>
            Living on the Gold Coast <FontAwesomeIcon icon={faUmbrellaBeach} />.
            I am constantly striving to sharpen my skills, solve important
            problems for my clients, and develop websites for Australian
            businesses.
          </p>
          <p>
            The technologies I work with are HTML, CSS, JavaScript, React,
            WordPress, Shopify, and a little bit of Node.js.
          </p>
          <p>
            Lets build something awesome! <span>Download my Resume.</span>
          </p>

          <Button path="/about" text="Read More" />
        </div>
      </StyledBox>
    </>
  )
}
const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 3px;
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.secondary};
  position: relative;
  border-radius: 10px;

  .content {
    padding: 3em;
    width: 100%;
    height: 100%;
    z-index: 4;
    background: ${({ theme }) => theme.primary};
    border-radius: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }
  .border-outside {
    top: 25px;
    left: 25px;
    border-radius: 10px;
    padding: 0.5rem;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #e80583;
    background: linear-gradient(
      90deg,
      rgba(252, 0, 87, 1) 0%,
      rgba(199, 16, 206, 1) 50%,
      rgba(252, 0, 87, 1) 100%
    );
    background-size: 400% auto;
    animation: ${gradient} 5s ease infinite;
    z-index: 3px;
  }
  .border-inside {
    background: ${({ theme }) => theme.secondary};
    padding: 5px;
    height: 100%;
    border-radius: 10px;
  }
  h2 {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`
