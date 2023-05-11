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
      <div className="side-panel-header">
        <h1>Notes</h1>
        <Button onClick={onNewNoteClick} content="Add" color="blue" size="large" />      
      </div>
      {listNotes}
    </div>
  )
}

export default SidePanel;
