import { connect } from 'react-redux';

import { Document } from './document.jsx'

import { createUser } from '../../actions/user_actions';
import { getCurrentDoc } from '../../selectors/doc_selectors';
import { createDocumentSubscription } from '../../util/websocket_util.js'

const msp = (state) => {
  return {
    currentDoc: getCurrentDoc(state)
  }
}

const mdp = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    createDocumentSubscription: (document) => createDocumentSubscription(document,dispatch)
  }
}

export default connect(msp,mdp)(Document);
