import * as React from "react"
import cls from "classnames"
import "./WikiItem.css"

class WikiItem extends React.Component {
  render() {
    const { title, content, isDo } = this.props

    return (
      <div className={cls("wiki-item-container", this.props.className)}>
        <div className="wiki-item-title-container">
          <span className="blue-rec" />
          <span className="wiki-item-tilte">{title}</span>
        </div>
        {this.props.show && (
          <div
            className={cls("wiki-item-state", {
              isdo: isDo,
              notdo: !isDo
            })}
          >
            {isDo ? "已审核" : "未审核"}
          </div>
        )}
        <div className="wiki-item-join">我要参与</div>
        <div className="wiki-item-content">{content}</div>
      </div>
    )
  }
}

export default WikiItem
