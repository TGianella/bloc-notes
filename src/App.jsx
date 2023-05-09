import { useState } from 'react';
import SidePanel from './components/SidePanel/index';
import MarkdownInput from './components/MarkdownInput/index';
import NoteDisplay from './components/NoteDisplay/index';
import './app.scss'

function App() {
  const [selectedId, setSelectedId] = useState(0);

  function handleChange(e) {
    
  }

  function handleSelectionClick() {
    console.log("clic");
  }

  return (
    <div className="container">
      <SidePanel onSelectionClick={handleSelectionClick} />
      <div className="notes">
        <NoteDisplay title="TITRE" content="contenu" />
        <MarkdownInput />
      </div>
    </div>
  )
}

export default App
