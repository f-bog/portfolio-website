import React, { useRef } from "react"

import Layout from "../components/layout"
import Section from "../components/Section"

import SEO from "../components/seo"

import Contact from "../components/Contact/Contact"
import About from "../components/About"

const AboutPage = () => {
  const myRef = useRef(null)
  return (
    <Layout>
      <SEO title="About" />
      <Section background="secondary">
        <About scrollRef={myRef} />
      </Section>

      <Section eleRef={myRef} background="two">
        <Contact />
      </Section>
    </Layout>
  )
}

export default AboutPage
