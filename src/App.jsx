import React from 'react';
import SidePanel from './components/SidePanel/index';
import MarkdownInput from './components/MarkdownInput/index';
import NoteDisplay from './components/NoteDisplay/index';
import './app.scss'

function App() {
  return (
    <div class="container">
      <SidePanel />
      <div class="notes">
        <MarkdownInput />
        <NoteDisplay />
      </div>
    </div>
  )
}

export default App
