import React from 'react';
import { ReactQuillLite } from './react_quill_lite.jsx';

import { EditorKeydownHandler } from './editor_change_handler.js';
import { EditorSelectionHandler } from './editor_selection_handler.js';

export class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.passUpQuill = this.passUpQuill.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }
  handleKeyDown(e) {
    if (["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    const idx = this.props.currentUserSelection.index
    EditorKeydownHandler(this.props.chars, e, this.props.document, idx);
  }
  passUpQuill(quill) {
    this.quill = quill;
    this.quill.on('selection-change', this.handleSelection);
  }

  handleSelection(range,oldRange,source) {
    EditorSelectionHandler(range,oldRange,source,this.props.currentUser, this.props.document)
  }

  render() {
    return (
      <div
        onKeyDown={this.handleKeyDown}>
        <ReactQuillLite
          idx={this.props.currentUserSelection.index}
          passUpQuill={(instance) => this.passUpQuill(instance)}
          stringVal={this.props.stringVal}
          />
      </div>
    )
  }
}
