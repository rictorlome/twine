import { connect } from "react-redux";

import { LogoutButton } from './logout_button.jsx';

import { logout } from '../../actions/session_actions.js';

const msp = (state) => {

  return {
    loggedIn: Boolean(state.session.currentUser)
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp,mdp)(LogoutButton)
