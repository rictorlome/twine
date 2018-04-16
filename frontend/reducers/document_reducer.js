import { merge } from 'lodash';

import { RECEIVE_DOCUMENT } from '../actions/document_actions.js';

export const documentReducer = (oldState={},action) => {
  Object.freeze(oldState);
  let newObj = {};
  switch(action.type) {
    case RECEIVE_DOCUMENT:
      newObj[action.doc.id] = action.doc
      return merge({},oldState,newObj)
    default:
      return oldState;
  }
}
