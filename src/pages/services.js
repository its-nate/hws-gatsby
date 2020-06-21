import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// TODO make stateful to control up or down arrow
const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h2 class="page-header">Services</h2>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m6 offset-m3">
          <ul class="collapsible">
            <li>
              <div class="collapsible-header" style={{position: "relative"}}>
                Custom Sites{" "}
                <span
                  class="material-icons"
                  style={{position: "absolute", right: "2%", top: "25%"}}
                >
                  keyboard_arrow_down
                </span>
              </div>
              <div class="collapsible-body">
                <span>
                  <h3 class="service-header">Starting at $400</h3>
                  <p>
                    Our mission says it all: creating comprehensive web
                    solutions uniquely designed for you and your brand.
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">WYSIWYG Sites</div>
              <div class="collapsible-body">
                <span>
                  <h3 class="service-header">Starting at $200</h3>
                  <p>
                    “What You See Is What You Get” website builders (e.g.,
                    Squarespace, Weebly, Wix, Google Sites) are a great
                    alternative for small projects or projects you want to
                    manage on your own going forward. While they offer much less
                    flexibility and customization they’re fast to build and
                    deploy. We can harness our web design expertise to build a
                    site for you using one of these popular services and hand
                    over the account information when we’re done.
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">Support &amp; Maintenance</div>
              <div class="collapsible-body">
                <span>
                  <h3 class="service-header">
                    $50 per month for up to 2 updates
                  </h3>
                  <p>
                    The internet moves fast—make sure your web presence keeps
                    up. Whether a custom site or a WYSIWYG project we offer
                    ongoing support and updates for your project to keep your
                    presence fresh, engaging, and modern.
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">Video Conference Training</div>
              <div class="collapsible-body">
                <span>
                  <p>
                    It’s important that your web presence empowers you and your
                    brand—that includes having knowledge of the technical
                    aspects of the project. We offer video conference
                    educational meetings (one included free at the completion of
                    any project) to give you more control over your web
                    presence. Ongoing sessions are available at an additional
                    charge.
                  </p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Services
