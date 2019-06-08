import * as React from "react"
import Header from "./header"
import HotWiki from "./hotwiki"
import WikiDescription from "./wikidescription"
import Wikis from "./wikis"
import DayInHistory from "./dayinhistory"

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div>
          <HotWiki />
          <WikiDescription />
        </div>
        <div>
          <Wikis />
          <DayInHistory />
        </div>
      </div>
    )
  }
}

export default Home
