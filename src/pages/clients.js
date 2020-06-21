import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BTB from "../components/clients/btb"
import Imprint from "../components/clients/imprint"

const Clients = () => (
  <Layout>
    <SEO title="Clients" />
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h2 className="page-header">Clients</h2>
        </div>
      </div>
      <div className="row white client-row">
        <BTB />
      </div>
      <div className="row white client-row no-border">
        <Imprint />
      </div>
    </div>
  </Layout>
)

export default Clients
