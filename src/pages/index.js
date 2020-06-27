import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

// TODO add inspector message
// TODO Flip imprint pics

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hws_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Img
              className="logo-landing"
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="Holistic Web Solutions"
              loading="eager"
            />
            <h1 className="tagline">
              Creating comprehensive web solutions uniquely designed for you and
              your brand
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
