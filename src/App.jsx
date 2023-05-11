import { useState, useEffect, useReducer } from 'react';
import uuid from "react-uuid";
import SidePanel from './components/SidePanel/index';
import MarkdownInput from './components/MarkdownInput/index';
import NoteDisplay from './components/NoteDisplay/index';
import notesReducer from './notesReducer.js';
import './app.scss'

function App() {
  const [notes, dispatch] = useReducer(notesReducer,
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  console.log("active note = ", activeNote)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleNewNoteClick() {
    const newId = uuid();

    dispatch({
      type: 'added',
      id: newId,
    });

    setActiveNote(newId);
  };

  function handleDeleteClick(noteId) {
    dispatch({
      type: 'deleted',
      id: noteId,
    });
  };

  function handleNoteChange(changedNote) {
    dispatch({
      type: 'changed',
      note: changedNote,
    })
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

