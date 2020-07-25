import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"

export default function About() {
  return (
    <>
      <div style={{ color: `teal` }}>
        <Header>About Gatsby</Header>
        <p>Such wow. Very React.</p>
      </div>
      <Link to="/">Home</Link>
    </>
  )
}
