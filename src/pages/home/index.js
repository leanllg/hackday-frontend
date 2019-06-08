import * as React from "react"
import Header from "./header"
import HotWiki from "./hotwiki"
import WikiDescription from "./wikidescription"
import Wikis from "./wikis"
import DayInHistory from "./dayinhistory"
import "./index.css"

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="home-main-bg">
          <HotWiki />
          <WikiDescription />
        </div>
        <div className="home-main-content">
          <Wikis />
          <DayInHistory />
        </div>
      </div>
    )
  }
}

export default Home
