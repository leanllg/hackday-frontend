import * as React from "react"
import { Link } from "@reach/router"

class Nav extends React.PureComponent {
  render() {
    const { links, className } = this.props
    return (
      <nav className={className}>
        {links.map(({ url, component }) => {
          return <Link to={url}>{component}</Link>
        })}
      </nav>
    )
  }
}

export default Nav
