import * as React from "react"
import { Component } from "react"
import "./HotWikiItem.css"
import Line from "../../../components/Line"

class HotWikiItem extends Component {
  render() {
    const {
      imgUrl,
      title,
      content,
      style,
      imgStyle,
      padding,
      bingRight
    } = this.props
    return (
      <div
        style={{ ...style, padding: padding }}
        className="hotwiki-item-container"
      >
        <div className="hotwiki-item-title-container">
          <span className="blue-rec" />
          <span className="hotwiki-item-title">{title}</span>
        </div>
        {imgUrl && (
          <img
            style={imgStyle}
            className="hotwiki-img"
            src={imgUrl}
            alt="wiki 图片"
          />
        )}
        {!imgUrl && <Line />}
        {content && <div className="hotwiki-content">{content}</div>}
        <div
          style={{ right: bingRight }}
          className="hotwiki-bing"
          onClick={this.props.onClick}
        />
      </div>
    )
  }
}

export default HotWikiItem
