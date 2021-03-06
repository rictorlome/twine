import * as ApiUtil from '../util/api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

export const receiveUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

export const createUser = (user) => (dispatch) => {
  return ApiUtil.signup(user).then(
    (user) => {
      return dispatch(receiveUser(user))
    }
  )
}
