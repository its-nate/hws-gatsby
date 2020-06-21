import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="container">
      <div class="row">
        <div class="col s12 center-align">
          <h2 class="page-header">Not Found</h2>
          <p class="page-header">You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
