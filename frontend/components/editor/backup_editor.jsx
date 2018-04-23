import React from 'react';
import { Quill } from 'react-quill'
import { ReactQuillLite } from './react_quill_lite.jsx';
// import QuillCursors from 'quill-cursors'

import { EditorChangeHandler, QuillKeydownHandler } from './editor_change_handler.js'

export class BackupEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.passUpQuill = this.passUpQuill.bind(this);
  }
  handleKeyDown(e) {
    if (["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    const idx = this.getIdx()
    QuillKeydownHandler(this.props.chars, e, this.props.document, idx);
  }
  getIdx() {
    if (this.quill === undefined || this.quill.getSelection() === null) return 0;
    return this.quill.getSelection().index;
  }
  passUpQuill(quill) {
    this.quill = quill;
    return;
  }

  render() {
    return (
      <div onKeyDown={this.handleKeyDown}>
        <ReactQuillLite
          idx={this.getIdx()}
          passUpQuill={(instance) => this.passUpQuill(instance)}
          stringVal={this.props.stringVal}
          />
      </div>
    )
  }
}
