import React from 'react';

import Editor from '../editor/editor_container.js';

export class Document extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.pullDoc().then(({doc}) => {
      this.props.createDocumentSubscription(doc)
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.url !== nextProps.match.url) {
      nextProps.pullDoc().then(({doc}) => {
          nextProps.createDocumentSubscription(doc)
      });
    }
  }

  render() {
    return (
      <div>
        <Editor document={this.props.currentDoc} />
      </div>
    )
  }
}
