import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImgAstronaut from "../components/images/astronaut"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Container>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Container>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <ImgAstronaut />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
