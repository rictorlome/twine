export const RECEIVE_CHAR = 'RECEIVE_CHAR';

export const receiveChar = (char) => {
  return {
    type: RECEIVE_CHAR,
    char
  }
}
