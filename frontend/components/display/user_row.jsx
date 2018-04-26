import React from 'react';

export const UserRow = ({user, selection}) => {
  let idxMessage;
  let lenMessage;
  selection === undefined ? idxMessage = '' : idxMessage = `Your index is ${selection.index}`
  selection === undefined ? lenMessage = '' : lenMessage = `Your selection length is ${selection.length}`

  return (
    <div>
      {`Hello, ${user.name}`}
      <br></br>
      {idxMessage}
      <br></br>
      {lenMessage}
    </div>
  )
}
