import React from 'react';
import TitleForm from '../TitleForm';
import ContentForm from '../ContentForm';
import Button from '../Button';

function MarkdownInput({ note, onTitleChange, onContentChange }) {

  return(
    <>
      <p>MarkdownInput</p>
      <TitleForm value={note.title} onChange={onTitleChange} />
      <ContentForm value={note.content} onChange={onContentChange} />
      <Button content="Sauvegarder" />
    </>
  )
}

export default MarkdownInput;
