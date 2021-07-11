import React from "react"
// Components
import Navbar from "./Navbar"
import Footer from "./Footer"
// Styles
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
