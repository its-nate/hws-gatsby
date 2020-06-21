import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Header = () => {
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
    <header>
      {/* Nav */}
      <ul id="slide-out" class="sidenav sidenav-fixed">
        <Link to="/">
          <Img
            className="logo-nav"
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Holistic Web Solutions"
            loading="eager"
          />
        </Link>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <nav>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <Link to="/">
          {" "}
          <h1 class="nav-header center-align">Holistic Web Solutions</h1>
        </Link>
      </nav>
    </header>
  )
}

export default Header
