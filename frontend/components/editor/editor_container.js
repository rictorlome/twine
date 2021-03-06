import { connect } from 'react-redux';
import { Editor } from './editor.jsx';

import { getCharString, getStringVal } from '../../selectors/doc_selectors';
import { getCurrentUserSelection } from '../../selectors/user_selectors';

const msp = (state) => {
  return {
    chars: getCharString(state),
    stringVal: getStringVal(state),
    currentUser: state.session.currentUser,
    currentUserSelection: getCurrentUserSelection(state)
  }
}

export default connect(msp,null)(Editor)
