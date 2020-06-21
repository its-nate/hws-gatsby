import React from "react"
// import Img from "gatsby-image"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import BTB from "../components/clients/btb"

const Clients = () => (
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h2 class="page-header">Clients</h2>
        </div>
      </div>
      <div class="row white client-row">
        {/* <div class="col s12 m6 push-m6">
          <img
            src="assets/btb-logo-outline.png"
            class="client-logo"
            alt="Beyond the Block Logo"
          />
          <a
            class="btn waves-effect"
            href="https://beyondtheblock.org/"
            target="_blank"
          >
            View Site
          </a>
        </div> */}
        <BTB />
        <div class="col s12 m6 pull-m6 client-project-img-col hide-on-small-only">
          <img
            src="assets/btb-website.png"
            class="client-project-img"
            alt="Beyond the Block Project Screencap"
          />
        </div>
      </div>
      <div class="row white client-row no-border">
        <div class="col s12 m6">
          <img
            src="assets/IE_logo_transparent.png"
            class="client-logo imprint-logo"
            alt="Imprint Entertainment Logo"
          />
          <a
            class="btn waves-effect"
            href="https://www.imprint-ent.com/"
            target="_blank"
          >
            View Site
          </a>
        </div>
        <div class="col s12 m6 client-project-img-col hide-on-small-only">
          <img
            src="assets/imprint-ent.png"
            class="client-project-img"
            alt="Imprint Entertainment Project Screencap"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default Clients
