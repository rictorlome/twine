// import isEmpty from 'lodash';

export const getCurrentUser = (state) => {
  return (Boolean(state.session.currentUser) ? state.entities.users[state.session.currentUser] : {} )
}

export const getCurrentUserSelection = (state) => {
  return (state.entities.selections[state.session.currentUser] === undefined ? {'index': 0, 'range': 0} : state.entities.selections[state.session.currentUser])
}
