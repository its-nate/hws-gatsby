import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    {/* Nav */}
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <Link to="/">
        <img
          class="logo-nav"
          src="assets/hws_logo_small.png"
          alt="Holistic Web Solutions Logo"
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

export default Header
