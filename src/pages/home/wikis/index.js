import * as React from "react"
import WikiItem from "./WikiItem"
import "./index.css"

class Wikis extends React.Component {
  state = {
    wikis: []
  }
  componentDidMount() {
    this.setState({
      wikis: [
        {
          id: 1,
          title: "联创团队unique hackday",
          content:
            "意为探索用户体验与工程实践是什么呢没意思的事情什么的. 联创团队从年开始举办黑客马拉松比赛，顶顶顶顶地地道道的无若付无错无错爱的废弃物的期望"
        },
        {
          id: 2,
          title: "联创团队unique hackday",
          content:
            "意为探索用户体验与工程实践是什么呢没意思的事情什么的. 联创团队从年开始举办黑客马拉松比赛，顶顶顶顶地地道道的无若付无错无错爱的废弃物的期望"
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <div className="wikis-title">待审核词条</div>
        {this.state.wikis.map(({ title, content, id }) => (
          <WikiItem
            className="wiki-item-size"
            key={id}
            title={title}
            content={content}
          />
        ))}
      </div>
    )
  }
}

export default Wikis
