export const getLastDocPath = (state) => {
  if (!Boolean(state.session.lastDoc)) return '/';
  return state.entities.documents[state.session.lastDoc].path;
}

export const getCurrentDoc = (state, withRouter) => {
  if (!Boolean(withRouter.match.params.documentId)) return null;
  return Object.values(state.entities.documents).filter(
     (doc) => doc.path === withRouter.match.params.documentId
   )[0]
}
