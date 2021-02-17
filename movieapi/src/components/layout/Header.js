import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link> <br />
      <Link to="/about">About Us</Link> <br />
      <Link to="/contact">Contact Us</Link> <br />
      <Link to="/comments">Comments</Link> <br />
      <Link to="/blog">Blog</Link> <br />
      <Link to="/sample1">Sample1</Link> <br />
      <Link to="/sample2">Sample2</Link> <br />
    </>
  )
}

export default Header
