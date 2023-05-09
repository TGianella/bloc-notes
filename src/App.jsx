import React from 'react';
import SidePanel from './components/SidePanel/index';
import MarkdownInput from './components/MarkdownInput/index';
import NoteDisplay from './components/NoteDisplay/index';
import './app.scss'

function App() {
  return (
    <div className="container">
      <SidePanel />
      <div className="notes">
        <NoteDisplay title="TITRE" content="contenu" />
        <MarkdownInput />
      </div>
    </div>
  )
}

export default App
