export const getCurrentUser = (state) => {
  return (Boolean(state.session.currentUser) ? state.entities.users[state.session.currentUser] : {} )
}
