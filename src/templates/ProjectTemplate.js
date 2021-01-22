import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/Section"
import styled from "styled-components"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Contact from "../components/Contact/Contact"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Section background="secondary">
        <StyledContainer>
          <Img
            fluid={frontmatter.thumbnail.childImageSharp.fluid}
            alt={frontmatter.title}
          />
          <div className="links">
            <Link to="/portfolio">
              <FontAwesomeIcon icon={faArrowLeft} /> More Projects
            </Link>
            <div>
              {frontmatter.github && (
                <a href={frontmatter.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              )}

              <a href={frontmatter.url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLink} /> Live Link
              </a>
            </div>
          </div>

          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />

          {frontmatter.technologies && (
            <>
              <h3>Technologies:</h3>
              <ul>
                {frontmatter.technologies.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </>
          )}
        </StyledContainer>
      </Section>
      <Section>
        <Contact />
      </Section>
    </Layout>
  )
}
const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 962px;
  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    a {
      display: inline-block;
      font-weight: 600;
      padding: 1em;
      font-size: 1.2em;
      text-decoration: none;
      color: rgb(103, 103, 103);
      transition: color 0.2s ease;
      &:hover {
        color: ${({ theme }) => theme.hover};
      }
    }
  }
  a {
    text-decoration: none;
    color: #e80583;
    font-weight: 900;
  }
  h1 {
    margin-top: 1em;

    font-size: 3em;
    font-family: "Montserrat";
  }
`

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        url
        github
        technologies
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
`
