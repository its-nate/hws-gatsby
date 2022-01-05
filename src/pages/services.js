import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      1: false,
      2: false,
      3: false,
      4: false
    }
  }

  handleDropdownState(i) {
    this.setState({
      1: false,
      2: false,
      3: false,
      4: false
    })

    this.setState({
      [i]: !this.state[i]
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Services" />
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h2 className="page-header">Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m8 offset-m2">
              <ul className="collapsible">
                <li>
                  <div
                    className="collapsible-header"
                    style={{ position: "relative" }}
                    onClick={() => this.handleDropdownState(1)}
                  >
                    Custom Sites{" "}
                    {this.state[1] ? (
                      <span
                        className="material-icons"
                        style={{
                          position: "absolute",
                          right: "2%",
                          top: "25%",
                        }}
                      >
                        keyboard_arrow_up
                      </span>
                    ) : (
                      <span
                        className="material-icons"
                        style={{
                          position: "absolute",
                          right: "2%",
                          top: "25%",
                        }}
                      >
                        keyboard_arrow_down
                      </span>
                    )}
                  </div>
                  <div className="collapsible-body">
                    <span>
                      <h3 className="service-header">Starting at $2,000</h3>
                      <p>
                        Our mission says it all: creating comprehensive web
                        solutions uniquely designed for you and your brand.
                      </p>
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="collapsible-header"
                    style={{ position: "relative" }}
                    onClick={() => this.handleDropdownState(2)}
                  >
                    WYSIWYG Sites
                    {this.state[2] ? (
                      <span
                        className="material-icons"
                        style={{
                          position: "absolute",
                          right: "2%",
                          top: "25%",
                        }}
                      >
                        keyboard_arrow_up
                      </span>
                    ) : (
                      <span
                        className="material-icons"
                        style={{
                          position: "absolute",
                          right: "2%",
                          top: "25%",
                        }}
                      >
                        keyboard_arrow_down
                      </span>
                    )}
                  </div>
                  <div className="collapsible-body">
                    <span>
                      <h3 className="service-header">Starting at $1,000</h3>
                      <p>
                        “What You See Is What You Get” website builders (e.g.,
                        Squarespace, Weebly, Wix, Google Sites) are a great
                        alternative for small projects or projects you want to
                        manage on your own going forward. While they offer much
                        less flexibility and customization they’re fast to build
                        and deploy. We can harness our web design expertise to
                        build a site for you using one of these popular services
                        and hand over the account information when we’re done.
                      </p>
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="collapsible-header"
                    style={{ position: "relative" }}
                    onClick={() => this.handleDropdownState(3)}
                  >
                    Support &amp; Maintenance
                    {this.state[3] ? (
                      <span
                        className="material-icons"
                        style={{
                          position: "absolute",
                          right: "2%",
                          top: "25%",
                        }}
                      >
                        keyboard_arrow_up
                      </span>
                    ) : (
                      <span
                        className="material-icons"
                        style={{
                          position: "absolute",
                          right: "2%",
                          top: "25%",
                        }}
                      >
                        keyboard_arrow_down
                      </span>
                    )}
                  </div>
                  <div className="collapsible-body">
                    <span>
                      <h3 className="service-header">
                        $100 per month for up to 2 updates
                      </h3>
                      <p>
                        The internet moves fast—make sure your web presence
                        keeps up. Whether a custom site or a WYSIWYG project we
                        offer ongoing support and updates for your project to
                        keep your presence fresh, engaging, and modern.
                      </p>
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="collapsible-header"
                    style={{ position: "relative" }}
                    onClick={() => this.handleDropdownState(4)}
                  >
                    Video Conference Training
                    {this.state[4] ? (
                      <span
                        className="material-icons"
                        style={{
                          position: "absolute",
                          right: "2%",
                          top: "25%",
                        }}
                      >
                        keyboard_arrow_up
                      </span>
                    ) : (
                      <span
                        className="material-icons"
                        style={{
                          position: "absolute",
                          right: "2%",
                          top: "25%",
                        }}
                      >
                        keyboard_arrow_down
                      </span>
                    )}
                  </div>
                  <div className="collapsible-body">
                    <span>
                      <p>
                        It’s important that your web presence empowers you and
                        your brand—that includes having knowledge of the
                        technical aspects of the project. We offer video
                        conference educational meetings (one included free at
                        the completion of any project) to give you more control
                        over your web presence. Ongoing sessions are available
                        at an additional charge.
                      </p>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Services
