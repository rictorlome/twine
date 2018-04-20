import { merge, isEqual } from 'lodash';

import { RECEIVE_CHAR, REMOVE_CHAR } from '../actions/char_actions.js';

var id = 0;

export const charReducer = (oldState={}, action) => {
  let newObj = {};
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CHAR:
      newObj[id] = action.char
      id++;
      return merge({},oldState,newObj)
    case REMOVE_CHAR:
      let copy = merge({},oldState)
      deleteByValue(action.char,copy)
      return copy;
    default:
      return oldState
  }
}

function deleteByValue(val, obj) {
    for(var f in obj) {
        if(obj.hasOwnProperty(f) && _.isEqual(obj[f], val)) {
            delete obj[f];
        }
    }
}
