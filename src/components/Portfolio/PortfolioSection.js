import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import PortfolioTile from "./PortfolioTile"

function PortfolioSection({ background }) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              title
              date
              url
              github
              slug
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StyledSection style={{ background }}>
      <div className="section-content">
        <h1>
          My <span>Portfolio.</span>
        </h1>

        <div className="grid">
          {data.allMarkdownRemark.edges.map((project, index) => (
            <PortfolioTile
              github={project.node.frontmatter.github}
              url={project.node.frontmatter.url}
              index={index}
              key={project.node.frontmatter.title}
              project={project}
              title={project.node.frontmatter.title}
              slug={project.node.frontmatter.slug}
            />
          ))}
        </div>
      </div>
    </StyledSection>
  )
}
const StyledSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  flex-direction: column;
  .section-content {
    width: 90%;
  }

  .grid {
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: "Montserrat";
    font-size: 3em;
    text-align: left;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  @media only screen and (min-width: 768px) {
    .section-content {
      height: 100%;
      max-width: 1260px;
      margin: 100px 50px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: 225px;
      grid-gap: 2em;
    }
  }
`

export default PortfolioSection
