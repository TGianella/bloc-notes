import React from 'react';
import TitleForm from '../TitleForm';
import ContentForm from '../ContentForm';
import Button from '../Button';
import './style.scss'

function MarkdownInput({ note, onUpdateNote }) {
  console.log(note);

  function onEditField(field, value) {
    onUpdateNote({
      ...note,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  return(
    <div className="inputs">
      <TitleForm value={note.title} onChange={onEditField} />
      <ContentForm value={note.content} onChange={onEditField} />
    </div>
  )
}

export default MarkdownInput;
