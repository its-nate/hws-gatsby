import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BTB from "../components/clients/btb"
import Imprint from "../components/clients/imprint"

const Clients = () => (
  <Layout>
    <SEO title="Clients" />
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h2 class="page-header">Clients</h2>
        </div>
      </div>
      <div class="row white client-row">
        <BTB />
      </div>
      <div class="row white client-row no-border">
        <Imprint />
      </div>
    </div>
  </Layout>
)

export default Clients
