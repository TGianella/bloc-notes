import React from 'react';
import SideNote from '../SideNote/index'
import Button from '../Button/index'
import './style.scss'

function SidePanel({ notes, onNewNoteClick, onDeleteClick, activeNote, setActiveNote }) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  const listNotes = sortedNotes.map(note =>  
    <SideNote
      isActive={note.id === activeNote}
      key={note.id}
      note={note}
      setActiveNote={setActiveNote}
      onDeleteClick={onDeleteClick}
    />
  );

  return (
    <div className="panel">
      <Button onClick={onNewNoteClick} content="Add note" />      
      {listNotes}
    </div>
  )
}

export default SidePanel;
