import { connect } from 'react-redux';

import { Document } from './document.jsx'

import { CharString } from '../../util/logoot_util.js';

import { createUser } from '../../actions/user_actions';
import { getCurrentDoc, getCurrentSubscription } from '../../selectors/doc_selectors';
import { createDocumentSubscription } from '../../util/websocket_util.js'

const msp = (state) => {
  return {
    currentDoc: getCurrentDoc(state),
    chars: Object.values(state.entities.chars)
  }
}

const mdp = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    createDocumentSubscription: (document) => createDocumentSubscription(document,dispatch)
  }
}

export default connect(msp,mdp)(Document);
