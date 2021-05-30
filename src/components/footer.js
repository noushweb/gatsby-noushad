import { StaticImage } from "gatsby-plugin-image"
import React from "react"
const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div className="footerwraper">
          <a href="index.html">
            <StaticImage
              src="../images/noushadlogo.svg"
              alt="noushad logo"
              className="addressdivlogo"
            ></StaticImage>
          </a>

          <p class="copyrite">
            <a href="index.html">©mohammednoushad.com</a>{" "}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
