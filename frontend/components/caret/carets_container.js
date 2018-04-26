import { connect } from 'react-redux';

import { Carets } from './carets.jsx';
import { getUsersInDocument, getDocUsersSelections } from '../../selectors/user_selectors.js';

const msp = (state) => {
  return {
    usersInDoc: getUsersInDocument(state),
    docUsersSelections: state.entities.selections,
    currentUser: state.session.currentUser
  }
}

export default connect(msp,null)(Carets)
