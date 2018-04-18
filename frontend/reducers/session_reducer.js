import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_DOCUMENT } from '../actions/document_actions.js';

export const sessionReducer = (oldState={currentUser: null, lastDoc: null}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({},oldState,{currentUser: action.user.user.id})
    case RECEIVE_DOCUMENT:
      return merge({},oldState,{lastDoc: action.doc.id})
    default:
      return oldState;
  }
}
