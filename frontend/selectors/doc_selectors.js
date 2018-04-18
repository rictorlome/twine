export const getLastDocPath = (state) => {
  if (!Boolean(state.session.lastDoc)) return '/';
  return state.entities.documents[state.session.lastDoc].path;
}
