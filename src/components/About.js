import React from "react"
import styled from "styled-components"
import ScrollButton from "./Buttons/ScrollButton"
import { animated, useSpring, config } from "react-spring"
import {
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faWordpress,
  faShopify,
  faJs,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import resume from "../../static/documents/frederick-bogdanoff-resume.pdf"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`

function About({ scrollRef }) {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
  }))

  const [{ y, color }, setBounce] = useSpring(() => ({
    y: -60,
    color: "#e80583",
    config: config.wobbly,
  }))

  return (
    <StyledContainer
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="content-1">
        <h1>
          About <span>Me</span>
          <animated.span
            style={{ transform: y.interpolate(v => `translateY(${v}%`), color }}
          >
            .
          </animated.span>
        </h1>
        <p>
          My name is Frederick Bogdanoff. I am originally from California, but
          have been living in Australia for almost 7 years.
        </p>
        <p>
          A little over 3 years ago I decided to teach myself web development
          and design. It's been incredibly rewarding, an enjoyable process, and
          to be honest I'm beginning to think It's impossible to stop learning.
        </p>
        <p>
          I currently work part time as a freelance web developer, maintaining,
          designing, and developing websites for clients ranging from small
          businesses, ecommerce, and startups.
        </p>
        <p>
          If you need help working on something awesome, I would love to hear
          from you!{" "}
          <a
            style={{ color: "#e80583" }}
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Download my Resume.
          </a>
        </p>
        <div
          className="button-container"
          onMouseEnter={() =>
            setBounce({ y: 0, color: "rgba(199, 16, 206, 1)" })
          }
          onMouseLeave={() => setBounce({ y: -60, color: "#e80583" })}
          role="presentation"
        >
          <ScrollButton text="Contact me" scrollRef={scrollRef} />
        </div>
      </div>
      <animated.div
        className="content-2"
        style={{ transform: props.xy.interpolate(trans) }}
      >
        <p>
          <FontAwesomeIcon icon={faHtml5} /> HTML
        </p>
        <p>
          <FontAwesomeIcon icon={faCss3} /> CSS
        </p>
        <p>
          <FontAwesomeIcon icon={faJs} /> JavaScript
        </p>
        <p>
          <FontAwesomeIcon icon={faReact} /> React
        </p>
        <p>
          <FontAwesomeIcon icon={faNodeJs} /> Node
        </p>
        <p>
          <FontAwesomeIcon icon={faShopify} /> Shopify
        </p>
        <p>
          <FontAwesomeIcon icon={faWordpress} /> WordPress
        </p>
      </animated.div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;

  flex-direction: column;
  h1 {
    font-family: "Montserrat";
    font-weight: 900;
    font-size: 3em;
    color: ${({ theme }) => theme.text};
  }
  .content-1 {
    width: 100%;
  }
  .content-2 {
    ${"" /* display: flex;
    flex-direction: column; */}
    width: 100%;
    text-align: right;
    font-size: 1.3em;
    color: #676767;
    h2 {
      font-size: 2em;
    }
  }
  .button-container {
    width: 150px;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .content-1 {
      width: 60%;
    }
    .content-2 {
      width: 40%;
    }
  }
`
export default About
