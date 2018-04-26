import { connect } from 'react-redux';

import { Display } from './display.jsx';
import { getUsersInDocument, getDocUsersSelections } from '../../selectors/user_selectors.js';

const msp = (state) => {
  return {
    usersInDoc: getUsersInDocument(state),
    docUsersSelections: state.entities.selections
  }
}

export default connect(msp,null)(Display)
