import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <StaticImage
                  src="../images/noushadlogo.svg"
                  alt="kartblue logo"
                  className="mainlogo"
                  placeholder="tracedSVG"
                />
              </Link>
              <a className="nav-btn" onClick={() => setShow(!show)}>
                <StaticImage
                  src="../images/menu.svg"
                  alt="menuicon"
                  className="burgericon"
                  placeholder="tracedSVG"
                />
              </a>
            </div>
            <div className={show ? "nav-links show-links" : "nav-links"}>
              <Link
                to="/"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                home
              </Link>
              <Link
                to="/#about"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                about
              </Link>
              <Link
                to="/projects"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/#contact"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
