import React, { useState } from 'react'
import Note from './Note'
import AddModal from './AddModal'

const NotesList = ({notesList, deleteNote, editNote}) => {
  const [show, setShow] = useState(false)
  const [selectedNote, setSelectedNote] = useState(null)

  
  const handleOpenModalNote = (note) => {
    setShow(true)
    setSelectedNote(note)
  }

  return (
    <>
      <AddModal show={show} selectedNote={selectedNote} setShow={setShow} editNote={editNote}/>
      <ul className='listContainer'> 
          {notesList.map((note) => (
              <Note handleOpenModalNote={handleOpenModalNote} key={note.id} note={note} deleteNote={deleteNote} setShow={setShow} show={show}/>
          ))}
      </ul>
    </>
  )
}
  

export default NotesList