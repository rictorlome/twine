import { connect } from "react-redux";

import { LogoutButton } from './logout_button.jsx';

import { logout } from '../../actions/session_actions.js';
import { getCurrentUser } from '../../selectors/user_selectors.js';

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: getCurrentUser(state)
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp,mdp)(LogoutButton)
