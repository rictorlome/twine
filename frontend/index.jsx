import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root.jsx';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()

  //For testing purposes:
  window.store = store;
  
  ReactDOM.render(<Root store={store} />, root);
})
