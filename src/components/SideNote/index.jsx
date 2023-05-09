import React from 'react';
import removeMd from 'remove-markdown';
import './style.scss';

function SideNote({ onSelectionClick, title, content, id }) {
  const stripContent = removeMd(content);
  const words = stripContent.split(' ');
  let result;
  if (words.length >= 15) {
    result = words.slice(0, 15).join(' ') + '...';
  } else {
    result = stripContent;
  }

  return (
    <div className="side-note" onClick={() => onSelectionClick(id)}>
      <h1 className="sideNote-title">{id + 1}. {title}</h1>
      <p>{result}</p>
    </div>
  )
}

export default SideNote;
