import React from 'react';

export class CreateDocumentButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.createDocument().then((response) => {
      this.props.history.push(`/documents/${response.doc.path}`)
    })
  }
  render() {
    return (
      <div className="create-document-button-wrapper"
        onClick={this.handleClick}>
        Hello from the Create Document Button
      </div>
    )
  }
}
