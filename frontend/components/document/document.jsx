import React from 'react';

import { Char, CharString } from '../../util/logoot_util.js';
import { DocumentChangeHandler } from './document_change_handler.js';

export class Document extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      CharString: new CharString(),
    }
    this.handleChange = this.handleChange.bind(this);
    this.getString = this.getString.bind(this);
  }
  componentWillMount() {
    this.props.createDocumentSubscription(this.props.currentDoc);
  }
  componentDidMount() {
    this.props.pullDoc();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.url !== nextProps.match.url) {
      nextProps.pullDoc().then(
        (action) => {
          nextProps.createDocumentSubscription(action.doc)
        }
       )
    }
  }

  handleChange(e) {
    DocumentChangeHandler(this.props.chars, e, this.props.currentDoc);
  }
  getString() {
    return this.props.chars.map( (char) => char.value).join('')
  }

  render() {
    return (
      <div>
        <textarea id="document-id"
          onChange={this.handleChange}
          placeholder={"Hello from the textarea"}
          value={this.getString()}></textarea>
      </div>
    )
  }
}
