import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
export default function MotionDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, role, thumb } = data.markdownRemark.frontmatter
  console.log(data)
  // const { next, previous } = data.allMarkdownRemark.frontmatter
  return (
    <Layout>
      <Seo title={title} />
      <div className="portfoliomain">
        <div className="back">
          <StaticImage
            src="../images/back-arrow.svg"
            alt="back arrow"
          ></StaticImage>
          <a href="../projects">back</a>
        </div>

        <h1>{title} </h1>
        {/* <Link to={next}>next</Link>
        <Link to={previous}>previous</Link> */}
        <p>Role:{role} </p>

        <Img fluid={thumb.childImageSharp.fluid} />
      </div>

      <section className="project">
        <div className="projectwrapper">
          <div className="container">
            <div
              className="projectcontent"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query Motiondetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        role
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
