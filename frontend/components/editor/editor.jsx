import React from 'react';
import { ReactQuillLite } from './react_quill_lite.jsx';

import { EditorKeydownHandler } from './editor_change_handler.js';
import { EditorSelectionHandler } from './editor_selection_handler.js';

import Carets from '../caret/carets_container.js';

export class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.passUpQuill = this.passUpQuill.bind(this);
    this.passUpStatus = this.passUpStatus.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }
  handleKeyDown(e) {
    if (["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    const idx = this.props.currentUserSelection.index
    EditorKeydownHandler(this.props.chars, e, this.props.document, idx, this.props.currentUser);
  }
  passUpQuill(quill) {
    this.quill = quill;
    this.quill.on('selection-change', this.handleSelection);
  }
  passUpStatus() {
    this.setState({mounted: true})
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
          passUpStatus={this.passUpStatus}
          stringVal={this.props.stringVal}
          />
        <Carets mounted={this.state.mounted} />
      </div>
    )
  }
}
