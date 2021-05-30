import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";

const Index = (props) => {
  return (
    <Layout>
      <Seo title="Home " />
      <BackgroundImage fluid={props.data.bg1Image.childImageSharp.fluid}>
        <section className="mainsection">
          <div className="container">
            <div className="main">
              <div className="leftcontent">
                <BackgroundImage
                  className="myphoto"
                  fluid={props.data.myphotoImage.childImageSharp.fluid}
                >
                  <div className="namebg">
                    <p>Hello there, I am </p>
                    <span>Mohammed Noushad, Designer</span>
                    <p className="location">Based in India</p>

                    <Link to="#contact">
                      <p className="hireme">hire me</p>
                    </Link>
                  </div>
                </BackgroundImage>
              </div>

              <div className="rightcontent">
                <h1 className="maintitle">
                  <span>
                    <Link to="/projects">visual design, </Link>
                  </span>
                  <span>
                    <Link to="../projects/graphic"> digital products, </Link>
                  </span>
                  <span>
                    <Link to="/projects">interactive prototypes, </Link>
                  </span>
                  <span>
                    <Link to="../projects/graphic">brand design, </Link>
                  </span>
                  <span>
                    <Link to="../projects/Logo-design">logo design </Link>
                  </span>
                  &
                  <span>
                    <Link to="../projects/motion"> animation </Link>
                  </span>
                </h1>
              </div>

              <div className="leftcontent2">
                <div className="social">
                  <ul>
                    <li>
                      <Link to="https://www.behance.net/m-noushad">
                        Behance
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/m_noushad.k">
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/in/mohammed-noushad-8b08573b/">
                        Linkedin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rightcontent2">
                <div className="pplinks">
                  <span className="portfolio-icons">
                    <StaticImage
                      src="../images/portfolio-icon.svg"
                      alt="portfolio icon"
                      placeholder="blurred"
                    />
                  </span>
                  <Link to="/projects">portfolio</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
      <BackgroundImage fluid={props.data.bg2Image.childImageSharp.fluid}>
        <section className="about" id="about">
          <div className="container">
            <h2>About</h2>
            <div className="aboutwrapper">
              <div className="left">
                <p>
                  I'm passionate about product design and digital technology.
                  With over 10 years of industry knowledge, I'm capable of
                  helping shape the visual look and feel of your product and
                  help you get ahead online.
                </p>

                <p>
                  As an avid learner, I've tried and tested most design tools so
                  I can shape my workflow to suit your team's process be that
                  using Illustrator, XD, Photoshop, Figma, InDesign,
                  aftereffect, Premiere or C4D whichever tool is best for the
                  job. I can also prototype the design to find the best
                  solution. I possess a wide range of abilities that combine
                  innovative art and design principles.
                </p>

                <div>
                  <Link
                    to="https://github.com/noushweb/projectimages/raw/main/assets/web-graphic%20designer-CV.pdf"
                    className="cvlink"
                  >
                    <span className="cv-icons">
                      <StaticImage
                        src="../images/cvicon.png"
                        alt="cvicon"
                        placeholder="tracedsvg"
                      />
                    </span>
                    My Cv
                  </Link>
                </div>
              </div>
              <div className="right">
                <h3>
                  The following are highlights in my skills and accomplishment:
                </h3>
                <p>
                  Developed numerous marketing programs (logos, brochures,
                  newsletters, infographics, presentations, and advertisements)
                  that have improved company position in the market.
                </p>
                <p>
                  Brought up company portfolio by providing ideas and execution
                  in designing video products, motion graphics, and animation.
                </p>
                <p>
                  My expertise as a UI/UX designer and web design gave the
                  company more confidence to diversify their areas and attract
                  new projects.
                </p>
                <p>
                  Outside of design, I love spending time with family and
                  friends, playing football, and watching movies. I love to
                  learn about new design tools and ideas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2>Get in touch !</h2>
            <div className="contactwrapper" id="contact">
              <div className="left">
                <p>
                  If you're looking to get in touch regarding a design project
                  please leave as much detail as possible as this will help me
                  to better evaluate the scope and get back to you with a quote!
                </p>
                <p>
                  If you don't like using forms, email me at{" "}
                  <a href="mailto:hello@noushweb.com?subject=Mail from mohammednoushad.com">
                    <span className="emailcolor">hello@noushweb.com</span>
                  </a>
                </p>

                <div className="social1">
                  <ul>
                    <li>
                      <a href="https://www.behance.net/m-noushad">Behance</a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/m_noushad.k">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/mohammed-noushad-8b08573b/">
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <form
                  name="mohammednoushad"
                  method="POST"
                  action="/success"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                  className="formwrapper"
                >
                  <p>
                    <label>Your Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                      id="name"
                    />
                  </p>

                  <p>
                    <label>Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                    />
                  </p>
                  <p>
                    <label>Subject</label>
                    <input
                      required
                      type="text"
                      type="text"
                      name="subject"
                      placeholder="subject"
                      id="subject"
                    />
                  </p>
                  <p>
                    <label>Small brief about project</label>
                    <textarea
                      required
                      name="message"
                      placeholder="Message"
                      rows="7"
                    ></textarea>
                  </p>

                  <p>
                    <button type="submit">Submit</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    myphotoImage: file(relativePath: { eq: "myphoto.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bg1Image: file(relativePath: { eq: "bg1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bg2Image: file(relativePath: { eq: "bg2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
