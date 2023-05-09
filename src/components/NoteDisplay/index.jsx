import React from 'react';
import NoteTitle from '../NoteTitle'
import NoteContent from '../NoteContent'
import './style.scss'

function NoteDisplay({ title, content }) {

  return (
    <div className="noteDisplay">
      <p>NoteDisplay</p>
      <NoteTitle content={title}/>
      <NoteContent content={content}/>
    </div>
  )
}

export default NoteDisplay;
