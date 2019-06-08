import * as React from "react"
import Logo from "./logo"
import Nav from "../../../components/Nav"
import "./index.css"

class Header extends React.Component {
  state = {
    tags: [],
    show: false
  }

  renderSearchComponent() {
    const { tags } = this.state
    return (
      <div className="header-c">
        <div className="header-sc">
          <input className="header-input" />
          <div className="header-search" />
        </div>
        <div>
          {tags.map(({ tag, id }) => (
            <div className="header-tag" key={id}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    )
  }

  handleSearchClick = e => {
    e.preventDefault()
    this.setState({ show: true })
  }

  links = [
    {
      id: "notification",
      url: "/",
      component: <div className="notification-icon" />
    },
    {
      id: "search",
      url: "/search",
      component: (
        <div onClick={this.handleSearchClick} className="search-icon" />
      )
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
      <>
        <div className="header">
          <Logo />
          <Nav className="header-nav" links={this.links} />
        </div>
        {this.state.show && this.renderSearchComponent()}
      </>
    )
  }
}

export default Header
