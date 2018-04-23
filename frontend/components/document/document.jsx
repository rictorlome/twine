import React from 'react';

import Editor from '../editor/editor_container.js';
import BackupEditor from '../editor/editor_container.js';

export class Document extends React.Component {
  constructor(props) {
    super(props)
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

  render() {
    return (
      <div>
        <BackupEditor document={this.props.currentDoc} />
      </div>
    )
  }
}
