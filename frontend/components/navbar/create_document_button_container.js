import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CreateDocumentButton } from './create_document_button.jsx';

import { createDocument } from '../../actions/document_actions';

const mdp = (dispatch) => {
  return {
    createDocument: () => dispatch(createDocument())
  }
}

export default withRouter(connect(null,mdp)(CreateDocumentButton))
