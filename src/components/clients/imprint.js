import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Imprint = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "imprint" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="col s12 m6">
        <Img
          className="client-logo imprint-logo"
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Imprint Entertainment"
          loading="eager"
        />
        <a
          className="btn waves-effect"
          href="https://www.imprint-ent.com/"
          target="_blank"
          rel="noreferrer"
        >
          View Site
        </a>
      </div>
      <div className="col s12 m6 client-project-img-col hide-on-small-only">
        <Img
          className="client-project-img"
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          alt="Imprint Entertainment Project Screencap"
          loading="eager"
        />
      </div>
    </>
  )
}

export default Imprint
