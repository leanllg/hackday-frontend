import * as React from "react"
import { Component } from "react"
import Header from "../home/header"
import WikiItem from "../home/wikis/WikiItem"
import "./index.css"

class MyInfo extends Component {
  state = {
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
    ],
    tags: ["风云人物"],
    todoTags: ["风云人物"]
  }

  renderRecommend() {
    return (
      <div className="info-rec-container">
        <div className="info-rec-title">个性化词条推荐</div>
        <div>
          {this.state.wikis.map(({ id, title, content }) => (
            <WikiItem
              key={id}
              className="info-wiki-size"
              title={title}
              content={content}
              show={true}
              isDo={true}
            />
          ))}
        </div>
      </div>
    )
  }

  renderUesrInfo() {
    return (
      <div className="info-user-info">
        <img className="info-user-img" src />
        <div className="info-user-nums">
          <div className="info-user-num">
            <div className="info-user-n">23</div>
            <div>创建词条数</div>
          </div>
          <div className="info-user-num">
            <div className="info-user-n">17</div>
            <div>修改词条数</div>
          </div>
          <div className="info-user-num">
            <div className="info-user-n">28</div>
            <div>评审词条数</div>
          </div>
        </div>
        <div className="info-user-des">学生在读，喜欢体育，美术和音乐</div>
      </div>
    )
  }

  renderTodo() {
    return (
      <div>
        <div className="info-todo-btns">
          <div className="info-todo-btn1">待审核词条</div>
          <div className="info-todo-btn2">我参与的词条</div>
        </div>
        <div>
          {this.state.wikis.map(({ id, title, content }) => (
            <WikiItem
              key={id}
              className="info-wiki-size"
              title={title}
              content={content}
              show={true}
              isDo={false}
            />
          ))}
        </div>
      </div>
    )
  }

  renderMyTags() {
    const { tags } = this.state
    return (
      <div className="info-tags-container">
        <div className="info-tags-title">
          <span className="blue-rec" />
          <div>我的标签</div>
        </div>
        <div>
          {tags.map(tag => (
            <div className="info-tags-tag">{tag}</div>
          ))}
        </div>
      </div>
    )
  }

  renderTodoTags() {
    const { todoTags } = this.state
    return (
      <div>
        <div className="info-todo-tag-btns">
          <div className="info-todo-tag-btn1">待审核的标签</div>
          <div className="info-todo-tag-btn2">我审核的标签</div>
        </div>
        <div className="info-todo-tags-container">
          {todoTags.map(tag => (
            <div className="info-tags-tag">{tag}</div>
          ))}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <div className="info-main">
          <div className="info-left">
            {this.renderRecommend()}
            {this.renderTodo()}
          </div>
          <div className="info-right">
            {this.renderUesrInfo()}
            {this.renderMyTags()}
            {this.renderTodoTags()}
          </div>
        </div>
      </div>
    )
  }
}

export default MyInfo
