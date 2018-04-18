import { connect } from 'react-redux';

import { createUser } from '../../actions/user_actions.js'
import { SignUp } from './sign_up.jsx'

import { getLastDocPath } from '../../selectors/doc_selectors.js';

const msp = (state) => {
  return {
    lastDocPath: getLastDocPath(state),
  }
}

const mdp = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  }
}
export default connect(msp,mdp)(SignUp)
