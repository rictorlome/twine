import React from 'react';

export const CaretDiv = ({selection, user}) => {
  if (selection === undefined) return null;
  const left = $('.ql-editor').caret('offset', selection.index).left
  const top = $('.ql-editor').caret('offset', selection.index).top
  var divStyle = {
    color: 'red',
    height: 10,
    width: 2,
    top: top,
    left: left,
    position: 'absolute',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };
  return (
    <div id={`caret-div-${user.id}`}
      style={divStyle}> |
    </div>
  )
}
