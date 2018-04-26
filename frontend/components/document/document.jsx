import React from 'react';

import Editor from '../editor/editor_container.js';
import Display from '../display/display_container.js';

export class Document extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const cu = this.props.currentUser
    this.props.pullDoc().then(({doc}) => {
      this.props.createDocumentSubscription(doc, cu)
    });
  }
  componentWillReceiveProps(nextProps) {
    const cu = this.props.currentUser
    if (this.props.match.url !== nextProps.match.url) {
      nextProps.pullDoc().then(({doc}) => {
          nextProps.createDocumentSubscription(doc, cu)
      });
    }
  }

  render() {
    return (
      <div>
        <Editor document={this.props.currentDoc} />
        <Display />
      </div>
    )
  }
}
