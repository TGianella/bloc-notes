import React from 'react';
import Showdown from 'showdown';
import './style.scss';

const converter = new Showdown.Converter();

function renderMarkdownToHTML(markdown) {
  const renderedHTML = converter.makeHtml(markdown);
  return {__html: renderedHTML};
}

function NoteContent({ content }) {
  const markup = renderMarkdownToHTML(content)

  return (
    <p dangerouslySetInnerHTML={markup}></p>
  )
}

export default NoteContent;
