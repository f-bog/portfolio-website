import React from "react"

import Layout from "../components/layout"
import Section from "../components/Section"

import SEO from "../components/seo"

import Intro from "../components/Intro"
import Box from "../components/Box"
import RecentProjects from "../components/Portfolio/RecentProjects"
import Contact from "../components/Contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section background="secondary">
      <Intro />
    </Section>
    <Section background="two">
      <Box />
    </Section>
    <Section background="secondary">
      <RecentProjects />
    </Section>
    <Section background="two">
      <Contact />
    </Section>
  </Layout>
)

export default IndexPage
