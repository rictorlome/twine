import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/user_actions.js';

export const userReducer = (oldState={},action) => {
  Object.freeze(oldState);
  let newObj = {};
  switch(action.type) {
    case RECEIVE_USER:
      newObj[action.user.id] = action.user;
      return merge({},oldState,newObj);
    case RECEIVE_CURRENT_USER:
      newObj[action.user.user.id] = action.user.user
      return merge({},oldState,newObj);
    default:
      return oldState;
  }
}
