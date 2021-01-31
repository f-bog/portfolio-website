import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans = (x, y) => `translate3d(${x / 10}px,${y / 7}px,0`

function HeroSvg() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: config.wobbly,
  }))

  return (
    <StyledSvg>
      <div
        className="window"
        role="presentation"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      />
      <svg
        id="prefix__Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 500 484.98"
        xmlSpace="preserve"
      >
        <style>
          {
            ".prefix__st0{fill:#fff;stroke:#1c1c1c;stroke-width:17.1339;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:10}"
          }
        </style>
        <path
          className="prefix__st0"
          d="M170.72 191.49l47.63 24.94-117.05 67.51-46.75 27.28-45.78-26.46.14-167.29L197.93 8.57l47.63 27.62-144.06 82.92-46.81 27.01-.07 112.05 46.74-27.21z"
        />
        <path
          className="prefix__st0"
          d="M246.52 90.67l-145.09 85.26-.07 55.03-46.74 27.21.07-112.05 46.81-27.01 144.06-82.92zM54.48 366.31l46.79-27.26-.12 110.43-46.79 26.94z"
        />
        <path
          className="prefix__st0"
          d="M218.35 216.43l-.06 55.04-116.99 67.57-46.81 27.28-.14 110.07-45.78-28.58.2-163.05 45.78 26.46 46.75-27.28z"
        />
        <animated.g
          className="cube"
          style={{ transform: props.xy.interpolate(trans) }}
        >
          <path
            className="prefix__st0"
            d="M362.81 145.55v56.27l-48.73 28.1-1.58-.89-47.08-27.21v-56.27l48.66-28.1 47.15 27.21z"
          />
          <path
            className="prefix__st0"
            d="M362.81 145.55l-48.73 28.17-1.58-.89v-.07l-47.08-27.21 48.66-28.1 47.15 27.21z"
          />
          <path
            className="prefix__st0"
            d="M362.81 145.55v56.27l-48.73 28.1-1.58-.89v-56.27l48.73-28.1z"
          />
        </animated.g>
      </svg>
    </StyledSvg>
  )
}

const StyledSvg = styled.div`
  width: 200px;

  .window {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  svg {
    width: 100%;
    margin-bottom: 5em;
  }

  @media only screen and (min-width: 768px) {
    width: 350px;
    svg {
      margin-bottom: 0;
    }
  }
`

export default HeroSvg
