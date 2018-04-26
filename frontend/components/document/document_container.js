import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Document } from './document.jsx'

import { CharString } from '../../util/logoot_util.js';

import { createUser } from '../../actions/user_actions';
import { pullDocument } from '../../actions/document_actions';

import { getCurrentDoc, getCurrentSubscription, getCharString } from '../../selectors/doc_selectors';
import { createDocumentSubscription } from '../../util/websocket_util.js'

const msp = (state, withRouter) => {
  return {
    currentDoc: getCurrentDoc(state, withRouter),
    chars: getCharString(state),
    currentUser: state.entities.users[state.session.currentUser]
  }
}

const mdp = (dispatch, withRouter) => {
  return {
    pullDoc: () => dispatch(pullDocument(withRouter.match.params.documentId)),
    createUser: (user) => dispatch(createUser(user)),
    createDocumentSubscription: (document, user) => createDocumentSubscription(document,dispatch, user)
  }
}

export default withRouter(connect(msp,mdp)(Document));
