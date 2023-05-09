import React from 'react';
import SideNote from '../SideNote/index'
import Button from '../Button/index'
import './style.scss'

function SidePanel({ onSelectionClick, onNewNoteClick, notes }) {
  const listNotes = notes.map(note =>  
    <SideNote
      key={note.id}
      id={note.id}
      onSelectionClick={onSelectionClick}
      title={note.title}
      content={note.content}
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
