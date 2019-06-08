import * as React from "react"
import "./line.css"

class Line extends React.Component {
  render() {
    return <div className="line" width={this.props.width || "100%"} />
  }
}

export default Line
