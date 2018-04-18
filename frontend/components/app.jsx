import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './util/auth_util.jsx'

import NavBar from './navbar/navbar.jsx';
import Welcome from './welcome/welcome.jsx';
import SignUp from './session/sign_up_container.js';
import Document from './document/document_container.js';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Route exact path={'/'} component={Welcome} />
      <AuthRoute path={'/signup'} component={SignUp} />
      <ProtectedRoute exact path={'/documents/:documentId'} component={Document} />
    </div>
  )
}

export default App;
