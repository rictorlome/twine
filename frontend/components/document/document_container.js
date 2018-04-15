import { connect } from 'react-redux';

import { Document } from './document.jsx'

import { createUser } from '../../actions/user_actions';
import { createDocument } from '../../actions/document_actions';

const mdp = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    createDocument: () => dispatch(createDocument())
  }
}

export default connect(null,mdp)(Document);
