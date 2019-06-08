import * as React from "react"
import "./index.css"
import cls from "classnames"
import Header from "../home/header"

class Edit extends React.Component {
  state = {
    type: 0, // 0 词条， 1 标签
    tags: [{ id: 1, tag: "学校风云" }, { id: 2, tag: "学校风云" }],
    title: "title",
    content: "content"
  }
  renderSelectEntry() {
    const { tags, title, content } = this.state
    return (
      <div className="create-select-tag">
        <div className="create-select-left">
          <div>
            <div className="create-select-title">词条标题</div>
            <input className="create-input-title" defaultValue={title} />
          </div>
          <div>
            <div className="create-select-title">词条正文</div>
            <textarea className="create-text-area" defaultValue={content} />
          </div>
        </div>
        <div className="create-select-right">
          <div className="create-select-title">编辑标签</div>
          <div className="create-select-add">
            <div className="create-s">
              <input />
              <div className="create-search" />
            </div>
            <div className="create-s">
              {tags.map(({ id, tag }) => (
                <div className="create-s-tag" key={id}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleEntryClick = () => {
    this.setState({ type: 0 })
  }

  handleTagClick = () => {
    this.setState({ type: 1 })
  }

  render() {
    const { type } = this.state
    return (
      <div className="create">
        <Header />
        <div className={cls("create-main-container", { tag: type === 1 })}>
          <div className="create-select-title">编辑词条</div>
          {type === 0 && this.renderSelectEntry()}
          {type === 1 && this.renderSelectTag()}
          <div className="create-submit center">确认创建</div>
        </div>
        <div className="create-footer" />
      </div>
    )
  }
}

export default Edit
