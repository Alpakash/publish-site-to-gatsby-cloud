import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <>
      <div style={{ color: `teal` }}>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
      </div>
      <Link to="/">Home</Link>
    </>
  )
}
