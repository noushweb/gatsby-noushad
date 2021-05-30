import React from "react"
import Layout from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
// import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
export default function Index({ data }) {
  console.log(data)
  const uiux = data.uiuxlist.nodes

  return (
    <Layout>
      <Seo title="UI/UX Design" />
      <div className="container">
        <div className="portfoliomain">
          <h1>Portfolio</h1>
          <div className="portfolioheader">
            <div className="pplinks">
              <span className="pdf-icons">
                <StaticImage src="../../images/pdficonwhite.svg" />
              </span>
              <Link
                className="iconlink"
                to="https://github.com/noushweb/projectimages/raw/df3348eb11622db437eff38e87800333a2d713e5/assets/portfolio.pdf"
              >
                Download pdf Version
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="work">
        <div className="container">
          <div className="workwrapper">
            <div className="filterwork">
              <ul className="tabs">
                <Link to="./">
                  <li className="tab-link current">UI UX</li>
                </Link>
                <Link to="./graphic">
                  <li className="tab-link">Graphic design</li>
                </Link>
                <Link to="./motion">
                  <li className="tab-link">motion graphics</li>
                </Link>
              </ul>
            </div>

            <div id="tab-1" className="tab-content current">
              <div className="outerworke">
                {uiux.map(uiux => (
                  <div className="works">
                    <Link
                      to={"/projects/" + uiux.frontmatter.slug}
                      key={uiux.id}
                    >
                      <Img
                        fluid={uiux.frontmatter.thumb.childImageSharp.fluid}
                        alt={uiux.frontmatter.title}
                      />
                      <p className="worktitle">{uiux.frontmatter.title}</p>
                      <span className="role">Role:{uiux.frontmatter.role}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="buttonwrapper">
              <Link to="/#contact">
                <button>Hire Me</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    uiuxlist: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "UI/UX" } } }
    ) {
      nodes {
        frontmatter {
          title
          role
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`
