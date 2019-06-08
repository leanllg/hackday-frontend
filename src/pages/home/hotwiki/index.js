import * as React from "react"
import HotWikiItem from "./HotWikiItem"
import "./index.css"

class HotWiki extends React.Component {
  state = {
    wikis: []
  }

  componentDidMount() {
    this.setState({ wikis: [{}] })
  }

  render() {
    const { wikis } = this.state
    return (
      <div className="hotwiki-container">
        <HotWikiItem
          style={{ width: "246px", height: "351px" }}
          title="联创团队"
          imgUrl="https://ss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/jpg/jiaguwenpcbj.jpg"
          imgStyle={{ width: "188px", height: "132px" }}
          content="近日，《美国科学院院刊》刊发 了一项研究，揭示出代际间，尤其是父代的体育锻炼对子代的大脑和认知的积极影响。"
        />
        <div className="hotwiki-right">
          <HotWikiItem
            style={{ width: "269px", height: "179px" }}
            title="UNIQUE HACKDAY"
            content="意为探索用户体验与工程实践是什么呢 没意思的事情什么的"
            padding="28px 20px 40px"
            bingRight="20px"
          />
          <HotWikiItem
            style={{ width: "224px", height: "179px" }}
            title="最佳创意团队"
            imgUrl="https://ss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/jpg/jiaguwenpcbj.jpg"
            imgStyle={{ width: "169px", height: "64px" }}
            padding="25px 27px 47px"
          />
          <HotWikiItem
            style={{ width: "354px", height: "150px" }}
            title="UNIQUE HACKDAY"
            padding="28px 29px 36px"
            content="意为探索用户体验与工程实践是什么呢没意思的事情什么的…"
          />
          <HotWikiItem
            style={{ width: "143px", height: "150px" }}
            title="火焰山"
            padding="20px 27px 36px"
            content="意为探索用户体验"
          />
        </div>
      </div>
    )
  }
}

export default HotWiki
