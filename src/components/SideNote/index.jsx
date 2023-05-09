import React from 'react';
import removeMd from 'remove-markdown';

function SideNote({ onSelectionClick, title, content, id }) {

  return (
    <div onClick={() => onSelectionClick(id)}>
      <h1>{title}</h1>
      <p>{removeMd(content)}</p>
    </div>
  )
}

export default SideNote;
