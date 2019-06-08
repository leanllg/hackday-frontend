import * as React from "react"
import "./index.css"

class DayInHistory extends React.Component {
  render() {
    return (
      <div className="dayh-container">
        <div className="dayh-title">那年今日</div>
        <div className="dayh-main-container">
          <div className="dayh-content" />
        </div>
      </div>
    )
  }
}

export default DayInHistory
