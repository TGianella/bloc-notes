import { useState } from 'react';
import SidePanel from './components/SidePanel/index';
import MarkdownInput from './components/MarkdownInput/index';
import NoteDisplay from './components/NoteDisplay/index';
import './app.scss'

function App() {
  const [selectedId, setSelectedId] = useState(0);
  const [currentNote, setCurrentNote] = useState({id: 0, title: "Nouvelle note", content: "..."});
  const notes = JSON.parse(localStorage.getItem('notes')) || [currentNote];

  function handleTitleChange(e) {
    notes[selectedId].title = e.target.value;
    localStorage.setItem('notes', JSON.stringify(notes));
    setCurrentNote({...currentNote, title: e.target.value});
  }

  function handleContentChange(e) {
    notes[selectedId].content = e.target.value;
    localStorage.setItem('notes', JSON.stringify(notes));
    setCurrentNote({...currentNote, content: e.target.value});
  }

  function handleSelectionClick(id) {
    setSelectedId(id);
    setCurrentNote(notes[id]);
  }


  function handleNewNoteClick() {
    const newNotes = [...notes]
    newNotes.push({id: notes.length, title: "Nouvelle note", content: "..."});
    localStorage.setItem('notes', JSON.stringify(newNotes));
    setSelectedId(notes.length);
  }


  return (
    <div className="container">
      <SidePanel
        onSelectionClick={handleSelectionClick}
        onNewNoteClick={handleNewNoteClick}
        notes={notes}
      />
      <div className="notes">
        <NoteDisplay note={currentNote} />
        <MarkdownInput
          note={currentNote}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
        />
      </div>
    </div>
  )
}

export default App
