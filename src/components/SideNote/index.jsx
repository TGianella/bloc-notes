import React from 'react';
import removeMd from 'remove-markdown';
import './style.scss';

function SideNote({ isActive, note, setActiveNote, onDeleteClick }) {
  const { id, title, content, lastModified } = note;

  let body = removeMd(content);
  if (body.length >= 100) {
    body = body.substring(0, 100) + '...';
  }

  return (
    <div className={`side-note ${isActive && "active"}`} onClick={() => setActiveNote(id)}>
      <div className="title-wrapper">
        <h1 className="sideNote-title">{title}</h1>
        <button onClick={(e) => {
          e.stopPropagation();
          onDeleteClick(id);
        }}>Delete</button>
      </div>
        <p>{body}</p>
      <small className="last-modified">
        Last modified{" "}
        {new Date(lastModified).toLocaleDateString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </small>
    </div>
  )
}

export default SideNote;
