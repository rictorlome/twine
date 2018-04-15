import * as ApiUtil from '../util/api_util';

export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const createUser = (user) => (dispatch) => {
  return ApiUtil.signup(user).then(
    (user) => dispatch(receiveUser(user))
  )
}
