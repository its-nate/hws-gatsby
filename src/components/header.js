import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"

class Header extends React.Component {

  render() {
    let activeNav = this.props.activePage

    return (
      <header>
        {/* Nav */}
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <Link to="/">
            <Logo />
          </Link>
          <li>
            {activeNav === "Services" ? (
              <Link to="/services" className="active-nav">
                Services
              </Link>
            ) : (
              <Link to="/services">Services</Link>
            )}
          </li>
          <li>
            {activeNav === "Clients" ? (
              <Link to="/clients" className="active-nav">
                Clients
              </Link>
            ) : (
              <Link to="/clients">Clients</Link>
            )}
          </li>
          <li>
            {activeNav === "Contact" ? (
              <Link to="/contact" className="active-nav">
                Contact
              </Link>
            ) : (
              <Link to="/contact">Contact</Link>
            )}
          </li>
        </ul>

        <nav>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <Link to="/">
            {" "}
            <h1 className="nav-header center-align">Holistic Web Solutions</h1>
          </Link>
        </nav>
      </header>
    )
  }
}

export default Header
