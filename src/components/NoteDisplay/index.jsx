import React from 'react';
import NoteTitle from '../NoteTitle'
import NoteContent from '../NoteContent'
import './style.scss'

function NoteDisplay({ note }) {

  return (
    <div className="noteDisplay">
      <p>NoteDisplay</p>
      <NoteTitle content={note.title}/>
      <NoteContent content={note.content}/>
    </div>
  )
}

export default NoteDisplay;
