import React from "react"
import Button from "./Buttons/Button"
import HeroSvg from "./HeroSvg"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
function Intro() {
  const [{ y, color }, set] = useSpring(() => ({
    y: -60,
    color: "#e80583",
    config: config.wobbly,
  }))
  return (
    <StyledIntro>
      <HeroSvg />
      <div className="introText">
        <h1>
          Hey, my name is{" "}
          <span>
            Fred
            <animated.span
              style={{
                transform: y.interpolate(v => `translateY(${v}%`),
                color,
              }}
            >
              .
            </animated.span>
          </span>
        </h1>
        <p style={{ fontSize: "1.4em" }}>UI/UX focused Web Developer.</p>
        <div
          role="presentation"
          className="button-container"
          onMouseEnter={() => set({ y: 0, color: "rgba(199, 16, 206, 1)" })}
          onMouseLeave={() => set({ y: -60, color: "#e80583" })}
        >
          <Button text="About Me" path="/about" />
          <Button
            accent={+true}
            className="about"
            text="Portfolio"
            path="/portfolio"
          />
        </div>
      </div>
    </StyledIntro>
  )
}

const StyledIntro = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-family: "Montserrat";
    font-weight: 900;
    font-size: 3em;
    color: ${({ theme }) => theme.text};
  }
  span {
    color: #e80583;
    display: inline-block;
  }

  .button-container {
    max-width: 360px;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 15px auto;
    justify-content: space-around;
  }
  .introText {
    max-width: 650px;
    position: relative;

    z-index: 10;
  }
  @media only screen and (min-width: 768px) {
    text-align: right;
    flex-direction: row;
    h1 {
      margin-bottom: 0.3em;
    }
    .button-container {
      max-width: 330px;

      margin: 2em 0px 0px auto;
      justify-content: space-between;
    }
  }
`

export default Intro
