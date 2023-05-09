import React from 'react';

function SideNote({ onSelectionClick, title, content }) {

  return (
    <div onClick={onSelectionClick}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default SideNote;
