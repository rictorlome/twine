import React from 'react';
import { Quill } from 'react-quill'
import { ReactQuillLite } from './react_quill_lite.jsx';
// import QuillCursors from 'quill-cursors'

import { EditorChangeHandler, QuillKeydownHandler } from './editor_change_handler.js'

export class BackupEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorIdx: 0
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown(e) {
    if (["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    QuillKeydownHandler(this.props.chars, e, this.props.document, this.state.cursorIdx);
  }
  render() {
    return (
      <div onKeyDown={this.handleKeyDown}>
        <ReactQuillLite
          stringVal={this.props.stringVal}
          />
      </div>
    )
  }
}
