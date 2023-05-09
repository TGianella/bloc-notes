import React from 'react';
import TitleForm from '../TitleForm';
import ContentForm from '../ContentForm';
import Button from '../Button';

function MarkdownInput() {

  return(
    <>
      <p>MarkdownInput</p>
      <TitleForm />
      <ContentForm />
      <Button content="Sauvegarder" />
    </>
  )
}

export default MarkdownInput;
