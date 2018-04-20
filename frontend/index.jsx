import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root.jsx';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser.user.id },
      entities: {
        users: { [window.currentUser.user.id]: window.currentUser.user }
      }
    }
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore();
  }

  //For testing purposes:
  window.store = store;

  ReactDOM.render(<Root store={store} />, root);
})
