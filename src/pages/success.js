import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { Link } from "gatsby";
const Success = (props) => {
  return (
    <Layout>
      <Seo title="Message Send" />

      <section className="notfound">
        <div className="container">
          <div className="notfound-wrapper">
            <h2>Thank You</h2>
            <p>Your message has been send Successfully</p>

            <div className="buttonwrapper">
              <Link to="/">
                <button>Rturn Home</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Success;
