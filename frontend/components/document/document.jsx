import React from 'react'

import { Char, CharString } from '../../util/logoot_util.js'

export class Document extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      CharString: new CharString(),
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.getString = this.getString.bind(this);
  }
  componentDidMount() {
    this.props.createDocumentSubscription(this.props.currentDoc);
  }
  sendMessage(e) {
    //create a char
    e.preventDefault()
    const cursorPosition = e.target.selectionStart - 1;
    const char = new Char(this.state.CharString.string, cursorPosition, 0, e.nativeEvent.data, 0)
    console.log(char.pos)
    const modChars = this.state.CharString;
    modChars.add(char);

    this.setState({CharString: modChars})
    console.log(this.state.CharString)
    //send it through websocket
  }
  getString() {
    return this.state.CharString.string.map( (char) => char.value).join('')
  }

  render() {
    return (
      <div>
        <textarea id="document-id"
          onChange={this.sendMessage}
          placeholder={"Hello from the textarea"}
          value={this.getString()}></textarea>
      </div>
    )
  }
}
