import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../actions/user_actions.js';

export const userReducer = (oldState={},action) => {
  Object.freeze(oldState);
  let newObj = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newObj[action.user.user.id] = action.user.user
      return merge({},oldState,newObj)
    default:
      return oldState;
  }
}
