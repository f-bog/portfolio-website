import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useSpring, animated } from "react-spring"
import { Link } from "gatsby"
import Img from "gatsby-image"

function PortfolioCard({ title, url, thumbnail, github, slug }) {
  const [{ y }, set] = useSpring(() => ({
    y: 0,
  }))

  return (
    <StyledCard
      style={{
        transform: y.interpolate(v => `translateY(${v}%)`),
      }}
      onMouseEnter={() => set({ y: -5 })}
      onMouseLeave={() => set({ y: 0 })}
    >
      <div className="card-image">
        <Img alt={title} fluid={thumbnail} />
        <div className="card-overlay" />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <div>
          <a href={url}>
            <FontAwesomeIcon icon={faLink} /> View Project
          </a>
          {github && (
            <a href={github}>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          )}
          <Link to={slug}>
            <FontAwesomeIcon icon={faFileAlt} /> Read More
          </Link>
        </div>
      </div>
    </StyledCard>
  )
}

const StyledCard = styled(animated.div)`
  width: 100%;
  background: ${({ theme }) => theme.secondary};
  height: 420px;
  border-radius: 15px;
  margin: 2em 0.5em;
  box-shadow: 3px 3px 16px -7px rgba(0, 0, 0, 0.75);
  .card-image {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;

    height: 50%;
    width: 100%;
    position: relative;
    .gatsby-image-wrapper {
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      width: 100%;
      height: 100%;
    }
    .card-overlay {
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 3;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.overlay};
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
    }
  }
  &:hover {
    .card-overlay {
      opacity: 0.2;
    }
  }
  h3 {
    font-size: 1.2em;
    margin-top: 1em;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    justify-contnet: space-between;
    padding-left: 1em;

    a {
      text-decoration: none;
      color: #7d7a7a;
      display: block;
      font-size: 0.9em;
      margin-bottom: 0.5em;

      transition: color 0.2s ease-in-out;
      font-weight: 600;
      &:hover {
        color: #e80583;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    width: 370px;
  }
`

export default PortfolioCard
