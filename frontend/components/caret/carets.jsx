import React from 'react';

import { CaretDiv } from './caret_div.jsx'

export const Carets = (props) => {
  if (!props.mounted) return null;

  const caretDivs = props.usersInDoc.map( (user) => {
    if (user.id !== props.currentUser) {
      return (
        <CaretDiv
          key={user.id}
          selection={props.docUsersSelections[user.id]}
          user={user} />
      )
    }
  })

  return (
    <div>
      {caretDivs}
    </div>
  )
}
