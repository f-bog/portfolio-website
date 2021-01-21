import React from "react"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

function PortfolioTile({ index, project, title, github, url, slug }) {
  const [{ scale, y, bottomY }, set] = useSpring(() => ({
    scale: 1,
    y: -100,
    bottomY: 100,
  }))
  const AnimatedImage = animated(Img)
  return (
    <StyledItem
      className={index}
      index={index}
      onMouseEnter={() => set({ scale: 1.2, y: 0, bottomY: 0 })}
      onMouseLeave={() => set({ scale: 1, y: -100, bottomY: 100 })}
      onTouchStart={() => set({ scale: 1.2, y: 0, bottomY: 0 })}
    >
      <AnimatedImage
        fluid={project.node.frontmatter.thumbnail.childImageSharp.fluid}
        style={{
          transform: scale.interpolate(v => `scale(${v})`),
        }}
      />

      <div className="overlay">
        <animated.h3
          style={{
            transform: y.interpolate(v => `translateY(${v}%)`),
          }}
        >
          {title}
        </animated.h3>

        <animated.div
          className="links"
          style={{
            transform: bottomY.interpolate(v => `translateY(${v}%)`),
          }}
        >
          <Link to={slug}>
            <FontAwesomeIcon icon={faFileAlt} /> Description
          </Link>

          <div>
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            )}

            <a href={url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} /> Link
            </a>
          </div>
        </animated.div>
      </div>
    </StyledItem>
  )
}
const StyledItem = styled(animated.div)`
  position: relative;
  height: 225px;
  border-radius: 10px;
  margin: 1em 0px;
  grid-column: ${props => {
    if (props.index % 7 === 1 || props.index % 7 === 5) {
      return "span 2"
    } else {
      return "span 1"
    }
  }};

  overflow: hidden;
  .gatsby-image-wrapper {
    height: 100%;

    border-radius: 10px;
  }
  .image-grower {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: ${({ theme }) => theme.overlay};
    transition: background 0.3s ease-in-out;
    border-radius: 10px;
    &:hover {
      background: ${({ theme }) => theme.overlayHover};
    }
    .links {
      display: flex;
      padding: 1em;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      text-align: left;

      a {
        display: inline-block;
        margin-right: 15px;
        color: ${({ theme }) => theme.text};
        font-size: 0.9em;
        font-weight: 600;
        transition: color 0.2s linear;
        text-decoration: none;
        &:hover {
          color: #e80583;
        }
      }
    }
  }
  h3 {
    font-size: 1.5em;
    padding: 0.6em;
  }

  color: ${({ theme }) => theme};
`

export default PortfolioTile
