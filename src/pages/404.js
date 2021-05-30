import React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link } from "gatsby"
const NotFoundPage = props => {
  return (
    <Layout>
      <Seo title="404: Not found" />

      <section className="notfound">
        <BackgroundImage fluid={props.data.pagenotfound.childImageSharp.fluid}>
          <div className="container">
            <div className="notfound-wrapper">
              <h2>Oops, this page does not exist</h2>
              <div className="buttonwrapper">
                <Link to="/">
                  <button>Rturn Home</button>
                </Link>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    pagenotfound: file(relativePath: { eq: "pagenotfound.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default NotFoundPage
