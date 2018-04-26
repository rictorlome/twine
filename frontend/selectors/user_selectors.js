// import isEmpty from 'lodash';

export const getCurrentUser = (state) => {
  return (Boolean(state.session.currentUser) ? state.entities.users[state.session.currentUser] : {} )
}

export const getCurrentUserSelection = (state) => {
  return (state.entities.selections[state.session.currentUser] === undefined ? {'index': 0, 'range': 0} : state.entities.selections[state.session.currentUser])
}

// Below selectors assume one document per session.
export const getUsersInDocument = (state) => {
  return Object.values(state.entities.users)
}

export const getDocUsersSelections = (state) => {
  return Object.values(state.entities.selections)
}
