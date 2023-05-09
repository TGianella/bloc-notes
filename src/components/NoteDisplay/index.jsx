import React from 'react';
import NoteTitle from '../NoteTitle'
import NoteContent from '../NoteContent'
import './style.scss'

function NoteDisplay() {

  return (
    <div className="noteDisplay">
      <p>NoteDisplay</p>
      <NoteTitle />
      <NoteContent />
    </div>
  )
}

export default NoteDisplay;
