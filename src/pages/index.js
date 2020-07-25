import React from "react"
import Header from "./../components/Header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <div>
        <Header>Hello world!</Header>
        <p>This is a cool paragraph.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </>
  )
}
