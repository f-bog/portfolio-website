import React from "react"
import styled from "styled-components"
import Button from "../Buttons/Button"
import PortfolioCard from "./PortfolioCard"
import { graphql, useStaticQuery } from "gatsby"
function RecentProjects() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        limit: 3
      ) {
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
                  fluid(maxHeight: 500, quality: 100) {
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
    <StyledContainer>
      <h2>
        Recent <span>Projects.</span>
      </h2>
      <div className="card-container">
        {data.allMarkdownRemark.edges.map(project => (
          <PortfolioCard
            key={project.node.frontmatter.title}
            title={project.node.frontmatter.title}
            url={project.node.frontmatter.url}
            github={project.node.frontmatter.github}
            slug={project.node.frontmatter.slug}
            thumbnail={project.node.frontmatter.thumbnail.childImageSharp.fluid}
          />
        ))}
      </div>

      <Button accent={+true} center={+true} text="See More" path="/portfolio" />
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
  margin: 2em 0px;
  h2 {
    margin-bottom: 1em;
    text-align: center;
  }
  .card-container {
    margin: 3rem 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media only screen and (min-width: 768px) {
    .card-container {
      justify-content: space-around;
      flex-direction: row;
      align-content: center;
    }
  }
`
export default RecentProjects
