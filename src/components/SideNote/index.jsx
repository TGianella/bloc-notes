import React from 'react';

function SideNote({ onSelectionClick, title, content, id }) {

  return (
    <div onClick={() => onSelectionClick(id)}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default SideNote;
