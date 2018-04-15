import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions.js';

export const userReducer = (oldState={},action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({},oldState,action.user)
    default:
      return oldState;
  }
}
