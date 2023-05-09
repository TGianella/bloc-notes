import React from 'react';
import SideNote from '../SideNote/index'
import Button from '../Button/index'
import './style.scss'

function SidePanel({ onSelectionClick }) {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const listNotes = notes.map(note =>  
    <SideNote
      id={note.id}
      onSelectionClick={onSelectionClick}
      title={note.title}
      content={note.content}
    />
  );

  return (
    <div className="panel">
      <p>SidePanel</p>
      <Button content="Add note" />      
      {listNotes}
    </div>
  )
}

export default SidePanel;
