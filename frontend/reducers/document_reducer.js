import { merge } from 'lodash';

import { RECEIVE_DOCUMENT } from '../actions/document_actions.js';

export const documentReducer = (oldState={},action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_DOCUMENT:
      return merge({},oldState,action.document)
    default:
      return oldState;
  }
}
