import * as ApiUtil from '../util/api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  }
}

export const logout = () => (dispatch) => {
  return ApiUtil.logout().then(
    () => dispatch(removeCurrentUser())
  )
}
