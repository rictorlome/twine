import { connect } from 'react-redux';

import { Document } from './document.jsx'

import { createUser } from '../../actions/user_actions';

const mdp = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  }
}

export default connect(null,mdp)(Document);
