import React from "react"
import PortfolioSection from "../components/Portfolio/PortfolioSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact/Contact"
import Section from "../components/Section"
function PortfolioPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <PortfolioSection />
      <Section background="two">
        <Contact />
      </Section>
    </Layout>
  )
}

export default PortfolioPage
