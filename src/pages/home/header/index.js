import * as React from "react"
import Logo from "./logo"
import Nav from "../../../components/Nav"

class Header extends React.Component {
  links = [
    {
      id: "notification",
      url: "/",
      component: <div className="notification-icon" />
    },
    {
      id: "search",
      url: "/search",
      component: <div className="search-icon" />
    },
    {
      id: "info",
      url: "/info",
      component: (
        <div className="user-link">
          <div className="user-text">Kate White</div>
          <div className="user-icon" />
        </div>
      )
    }
  ]

  render() {
    return (
      <div className="header">
        <Logo />
        <Nav className="header-nav" links={this.links} />
      </div>
    )
  }
}

export default Header
