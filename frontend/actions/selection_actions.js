export const RECEIVE_SELECTION = 'RECEIVE_SELECTION';

export const receiveSelection = (selection, user) => {
  return {
    type: RECEIVE_SELECTION,
    selection,
    user
  }
}
