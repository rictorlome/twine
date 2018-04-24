import { merge } from 'lodash'

import { RECEIVE_SELECTION } from '../actions/selection_actions.js'

const defaultState = {

}

export const selectionReducer = (oldState=defaultState, action) => {
  Object.freeze(oldState);
  const newObj = {};
  switch(action.type) {
    case RECEIVE_SELECTION:
      newObj[action.user] = action.selection;
      return merge({},oldState,newObj)
    default:
      return oldState;
  }
}
