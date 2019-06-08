import * as React from "react"
import HotWikiItem from "./HotWikiItem"

class HotWiki extends React.Component {
  state = {
    wikis: []
  }

  componentDidMount() {
    this.setState({ wikis: [] })
  }

  render() {
    const { wikis } = this.state
    return (
      <div>
        {wikis.map(wiki => (
          <HotWikiItem wiki={wiki} />
        ))}
      </div>
    )
  }
}

export default HotWiki
