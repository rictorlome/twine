import React from 'react';

import ReactQuill, { Quill } from 'react-quill';
import QuillCursors from 'quill-cursors'

import { EditorChangeHandler, QuillKeydownHandler } from './editor_change_handler.js'

export class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cursorIdx: 0
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
    Quill.register('modules/cursors', QuillCursors)
    this.modules = {
      'syntax': true,
      'cursors': true
    }
  }
  componentDidMount() {
    this.cursors = this.quillRef.getEditor().getModule('cursors')
  }
  handleKeyDown(e) {
    this.cursors.setCursor({
      id: '1',
      name: 'User 1',
      color: 'red',
      range: this.cursors.quill.getSelection()
    })
    return;
    if (["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    QuillKeydownHandler(this.props.chars, e, this.props.document, this.state.cursorIdx);
  }
  handleChange(content, delta, source, editor) {
    window.delta = delta;
  }
  handleSelection(range,source,editor) {
    return;
    this.setState({cursorIdx: range.index})
  }
  render() {
    return <ReactQuill value={this.props.stringVal}
                       placeholder={'Hello'}
                       theme="bubble"
                       onChange={this.handleChange}
                       ref={(el) => this.quillRef = el}
                       onKeyDown={this.handleKeyDown}
                       modules={this.modules}
                       onChangeSelection={this.handleSelection}
                        />
  }
}
