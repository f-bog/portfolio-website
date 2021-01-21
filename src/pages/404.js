import React from "react"
import PageNotFound from "../components/PageNotFound"

import Layout from "../components/layout"
import Section from "../components/Section"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Section background="#0f0f0f">
      <PageNotFound />
    </Section>
  </Layout>
)

export default NotFoundPage
