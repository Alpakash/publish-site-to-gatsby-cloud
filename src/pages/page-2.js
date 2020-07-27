import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImgBluemerle from "../components/images/bluemerle"
import SEO from "../components/seo"
import Video from "./../components/video"
import Explosion from "../images/explosion.gif"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
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
  </Layout>
)

export default SecondPage
