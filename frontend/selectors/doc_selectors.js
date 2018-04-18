export const getLastDocPath = (state) => {
  if (!Boolean(state.session.lastDoc)) return '/';
  return state.entities.documents[state.session.lastDoc].path;
}

export const getCurrentDoc = (state) => {
  if (!Boolean(state.session.lastDoc)) return null;
  return state.entities.documents[state.session.lastDoc];
}
