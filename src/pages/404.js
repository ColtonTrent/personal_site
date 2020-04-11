import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{
      color: '#333',
      fontSize: '200%',
    }}>Out CLimbing</h1>
    <p style ={{
      color: '#333',
    }}>I'll put this up when I get back from the crag!</p>
  </Layout>
)

export default NotFoundPage
