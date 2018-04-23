import React from 'react';
import ReactQuill from 'react-quill';

import { EditorChangeHandler, QuillKeydownHandler } from './editor_change_handler.js'

export class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cursorIdx: 0
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }
  handleKeyDown(e) {
    if (["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    QuillKeydownHandler(this.props.chars, e, this.props.document, this.state.cursorIdx);
  }
  handleSelection(range,source,editor) {
    return;
    this.setState({cursorIdx: range.index})
  }
  render() {
    return <ReactQuill value={this.props.stringVal}
                       placeholder={'Hello'}
                       theme="bubble"
                       onKeyDown={this.handleKeyDown}
                       onChangeSelection={this.handleSelection}
                        />
  }
}
