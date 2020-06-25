import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const M = typeof window !== `undefined` ? require("materialize-css") : null

class Layout extends React.Component {
  componentDidMount() {
    setTimeout(function () {
      var menuElems = document.querySelectorAll(".collapsible")
      var menuInstances = M.Collapsible.init(menuElems)

      var mobileNavElems = document.querySelectorAll(".sidenav")
      var mobileNavInstances = M.Sidenav.init(mobileNavElems)
    }, 500)
  }

  render() {
    return (
      <>
        <Helmet>
          {/* Materialize Icons */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          {/* Font Awesome */}
          <script src="https://use.fontawesome.com/d450e8dc45.js"></script>
        </Helmet>
        <Header activePage={this.props.children[0].props.title} />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout
