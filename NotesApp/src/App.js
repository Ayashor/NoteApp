import './App.css';
import { useState } from 'react';
import InputForm from './Components/InputForm';
import NotesList from './Components/NotesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './Components/AddModal';

function App() {
  const [notesList, setNotesList] = useState([])

  const addNote = (newNote) =>{
    const newNotesList = [...notesList, newNote]
    setNotesList(newNotesList)
  }

  const deleteNote = (noteId) => {
    const updatedNotesList = notesList.filter((note) => note.id !== noteId);
    setNotesList(updatedNotesList);
  };

  const editNote = (editedNote) => {
    const newNotesList = notesList.map((note) => {
      if (note.id === editedNote.id) {
        return editedNote;
      } else {
        return note;
      }
    });
    setNotesList(newNotesList);
  };
  
  return (
    <div>
      <InputForm addNote={addNote} />
      <NotesList notesList={notesList} deleteNote={deleteNote} editNote={editNote}/>
    </div>
  );
}

export default App;