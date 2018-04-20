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
  componentDidMount() {
    this.props.createDocumentSubscription(this.props.currentDoc);
  }
  componentWillReceiveProps(nextProps) {
    //this is a temporary solution to close websocket loop
    nextProps.chars.forEach( (char) => {
      const modCharString = this.state.CharString;
      modCharString.add(char);
      this.setState({CharString: modCharString})
    })
  }

  handleChange(e) {
    DocumentChangeHandler(this.state.CharString.string, e, this.props.currentDoc);
  }
  getString() {
    return this.state.CharString.string.map( (char) => char.value).join('')
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
