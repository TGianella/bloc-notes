import React from 'react';
import TitleForm from '../TitleForm';
import ContentForm from '../ContentForm';
import Button from '../Button';
import './style.scss'

function MarkdownInput({ note, onTitleChange, onContentChange }) {

  return(
    <div className="inputs">
      <TitleForm value={note.title} onChange={onTitleChange} />
      <ContentForm value={note.content} onChange={onContentChange} />
    </div>
  )
}

export default MarkdownInput;
