import React from "react"
import "../css/main.scss"
import Header from "../components/header"
import Footer from "../components/footer"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
