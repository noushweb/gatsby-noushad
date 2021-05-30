import React from "react"
import Layout from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
// import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
export default function Index({ data }) {
  console.log(data)
  const allprojects = data.allprojectslist.nodes

  return (
    <Layout>
      <Seo title="All My Projects" />
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
                  <li className="tab-link current">All Projects</li>
                </Link>
                {/* <Link to="./graphic">
                  <li className="tab-link">Graphic design</li>
                </Link>
                <Link to="./motion">
                  <li className="tab-link">motion graphics</li>
                </Link> */}
              </ul>
            </div>

            <div id="tab-1" className="tab-content current">
              <div className="outerworke">
                {allprojects.map(allprojects => (
                  <div className="works">
                    <Link
                      to={"/projects/" + allprojects.frontmatter.slug}
                      key={allprojects.id}
                    >
                      <Img
                        fluid={
                          allprojects.frontmatter.thumb.childImageSharp.fluid
                        }
                        alt={allprojects.frontmatter.title}
                      />
                      <p className="worktitle">
                        {allprojects.frontmatter.title}
                      </p>
                      <span className="role">
                        Role:{allprojects.frontmatter.role}
                      </span>
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
    allprojectslist: allMarkdownRemark {
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
