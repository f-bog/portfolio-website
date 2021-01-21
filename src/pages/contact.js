import React from "react"

import Layout from "../components/layout"
import Section from "../components/Section"

import SEO from "../components/seo"

import Contact from "../components/Contact/Contact"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <Section background="#0f0f0f">
        <Contact heading="h1" />
      </Section>
    </Layout>
  )
}

export default AboutPage
