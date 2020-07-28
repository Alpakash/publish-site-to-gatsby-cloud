import React from "react"
import Layout from './../components/layout';

export default function Home() {
  return (
    <Layout>
      <div style={{ maxWidth: 750, margin: `3rem auto` }}>
        <h1>Hi! Welcome and enjoy.</h1>
        <p>
          What do I like to do? Lots of courses but I definitely enjoy building
          websites.
        </p>
      </div>
    </Layout>
  )
}
