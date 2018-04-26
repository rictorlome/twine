import React from 'react';

import { UserRow } from './user_row.jsx';

export const Display = (props) => {
  const userRows = props.usersInDoc.map( (user) => {
    return <UserRow key={user.id} user={user} selection={props.docUsersSelections[user.id]} />
  })
  return (
    <div className="display-container">
      {userRows}
    </div>
  )
}
