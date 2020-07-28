import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImgBluemerle from "../components/images/bluemerle"
import SEO from "../components/seo"
import Video from "../components/video"
import Explosion from "../images/explosion.gif"

const SecondPage = () => (
  <Layout>
    <div style={{ maxWidth: 750, margin: `3rem auto` }}>
      <SEO title="Page two" />
      <h1>About</h1>
      <br />
      Image:
      <ImgBluemerle />
      <br />
      Video:
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
      GIF:
      <br />
      <img src={Explosion} alt="explosion gif" />
    </div>
  </Layout>
)

export default SecondPage
