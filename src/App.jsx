import { useState, useEffect } from 'react';
import uuid from "react-uuid";
import SidePanel from './components/SidePanel/index';
import MarkdownInput from './components/MarkdownInput/index';
import NoteDisplay from './components/NoteDisplay/index';
import './app.scss'

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  console.log("active note = ", activeNote)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleNewNoteClick() {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      content: "",
      lastModified: Date.now()
    }; 

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  function handleDeleteClick(noteId) {
    setNotes(notes.filter(({ id }) => id !== noteId))
  };

  function handleNoteChange(changedNote) {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === changedNote.id) {
        return changedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  function getActiveNote() {
    return notes.find(({ id }) => id === activeNote);
  };
  
  return (
    <div className="container">
      <SidePanel
        notes={notes}
        onNewNoteClick={handleNewNoteClick}
        onDeleteClick={handleDeleteClick}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <div className="notes">
        {getActiveNote() ? (
          <>
            <NoteDisplay note={getActiveNote()} />
            <MarkdownInput
              note={getActiveNote()}
              onUpdateNote={handleNoteChange}
            />
          </>
        ) : (
          <div className='no-active-note'>No active note</div>
        )}
      </div>
    </div>
  )
}

export default App;

