import React from 'react';

import CreateDocumentButton from './create_document_button_container.js';
import LogoutButton from './logout_button_container.js';

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <CreateDocumentButton />
      <LogoutButton />
    </div>
  )
}
export default NavBar;
