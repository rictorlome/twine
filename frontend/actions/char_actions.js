export const RECEIVE_CHAR = 'RECEIVE_CHAR';
export const REMOVE_CHAR = 'REMOVE_CHAR';

export const receiveChar = (char) => {
  return {
    type: RECEIVE_CHAR,
    char
  }
}

export const removeChar = (char) => {
  return {
    type: REMOVE_CHAR,
    char
  }
}
