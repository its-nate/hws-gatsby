import React from "react"
import Layout from "../components/layout"

const Contact = () => (
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col s12 center-align">
          <h2 class="page-header">Contact</h2>
        </div>
      </div>

      <div class="row">
        <div class="col s12 center-align">
          <div class="contact">
            <a href="tel:+1-415-933-7597" class="hide-on-med-and-down">
              <span class="contact-info">415-933-7597</span>
            </a>
            <a href="tel:+1-415-933-7597" class="hide-on-large-only">
              <i class="fa fa-phone fa-4x" aria-hidden="true"></i>
            </a>
            <br />
            <a
              href="mailto:info@holisticwebsolutions.com"
              class="hide-on-med-and-down"
            >
              <span class="contact-info">info@holisticwebsolutions.com</span>
            </a>
            <a
              href="mailto:info@holisticwebsolutions.com"
              class="hide-on-large-only"
            >
              <i class="fa fa-envelope fa-4x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact