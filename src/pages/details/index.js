import * as React from "react"
import Header from "../home/header"
import moment from "moment"
import "./index.css"

class Details extends React.Component {
  state = {
    title: "联创团队",
    begin: 1318781876,
    update: 1318781876,
    tags: [{ id: 1, tag: "风云人物" }],
    content: "",
    state: true,
    readNum: 2343,
    bingNum: 234,
    history: [{ id: 1, time: 1318781876, user: "Kate White" }]
  }
  renderDetailTitle() {
    let { title, begin, update, tags, state, readNum, bingNum } = this.state
    return (
      <div className="detail-d-title">
        <div className="detail-title-container">
          <span className="blue-rec" />
          <div className="detail-title">{title}</div>
        </div>
        <div className="detail-time">
          <div>发布: {moment.unix(begin).format("YYYY-MM-DD HH:mm:ss")}</div>
          <div>更新: {moment.unix(update).format("YYYY-MM-DD HH:mm:ss")}</div>
        </div>
        <div>
          {tags.map(({ id, tag }) => (
            <div className="detail-tag" key={id}>
              {tag}
            </div>
          ))}
        </div>
        <div className="detail-state">{state ? "已审核" : "未审核"}</div>
        {state && (
          <div className="detail-state-nums">
            阅读 {readNum} 赞 {bingNum}
          </div>
        )}
      </div>
    )
  }
  renderDetailContent() {
    const { content } = this.state

    return <div className="detail-content">{content}</div>
  }
  renderDetailHistory() {
    const { history } = this.state
    return (
      <div>
        <div className="detail-history-title">词条历史</div>
        <div>
          {history.map(({ id, time, user }) => {
            return (
              <div key={id} className="detail-his">
                <div className="detail-his-time">
                  <div className="detail-his-t center">
                    {moment.unix(time).format("YYYY年MM月DD日")}
                  </div>
                  <div className="detail-his-m">点击查看详情</div>
                </div>
                <div className="detail-his-user">
                  <div>{user}</div>
                  <img src />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  renderDetailBtn() {
    const { state } = this.state

    if (state) {
      return (
        <div className="detail-btns">
          <div className="detail-btn center" data-type="bing">
            <span />
          </div>
          <div className="detail-btn center" data-type="edit">
            <span />
          </div>
          <div className="detail-btn center" data-type="anti">
            <span />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="detail-btns" />
          <div className="detail-btn center" data-type="good">
            <span />
          </div>
          <div className="detail-btn center" data-type="bad">
            <span />
          </div>
          <div className="detail-btn center" data-type="soso">
            <span />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="detail-container">
          {this.renderDetailTitle()}
          {this.renderDetailContent()}
          {this.state.state && this.renderDetailHistory()}
          {this.renderDetailBtn()}
        </div>
      </div>
    )
  }
}

export default Details
