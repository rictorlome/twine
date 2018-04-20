import { merge } from 'lodash';

import { RECEIVE_CHAR } from '../actions/char_actions.js';


export const charReducer = (oldState={}, action) => {
  var id = 0;
  let newObj = {};
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CHAR:
      newObj[id] = action.char
      id++;
      return merge({},oldState,newObj)
    default:
      return oldState
  }
}
