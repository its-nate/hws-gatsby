import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <h2 className="page-header">Contact</h2>
        </div>
      </div>

      <div className="row">
        <div className="col s12 center-align">
          <div className="contact">
            <a href="tel:+1-415-933-7597" className="hide-on-med-and-down">
              <span className="contact-info">415-933-7597</span>
            </a>
            <a href="tel:+1-415-933-7597" className="hide-on-large-only">
              <i className="fa fa-phone fa-4x" aria-hidden="true"></i>
            </a>
            <br />
            <a
              href="mailto:info@holisticwebsolutions.com"
              className="hide-on-med-and-down"
            >
              <span className="contact-info">info@holisticwebsolutions.com</span>
            </a>
            <a
              href="mailto:info@holisticwebsolutions.com"
              className="hide-on-large-only"
            >
              <i className="fa fa-envelope fa-4x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact