import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './navbar/navbar.jsx';
import Welcome from './welcome/welcome.jsx';
import Document from './document/document_container.js';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Route exact path={'/'} component={Welcome} />
      <Route exact path={'/documents/:documentId'} component={Document} />

    </div>
  )
}

export default App;
