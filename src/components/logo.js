import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hws_logo_small.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <Img
      className="logo-nav"
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Holistic Web Solutions"
      loading="eager"
    />
  )
}

export default Logo
