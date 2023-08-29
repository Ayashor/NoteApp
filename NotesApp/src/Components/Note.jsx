import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Note = ({note, deleteNote, handleOpenModalNote, show}) => {
  
  const handleDelete = (event) => {
    event.stopPropagation();
    window.confirm("Are you sure you want to delete your note?") && deleteNote(note.id);
  }


  return (
    <li onClick={() => handleOpenModalNote(note)}>
        <Typography sx={{borderBottom: 1}} variant="body1">{note.title}</Typography>
        <Typography sx={{mt:1 ,mb:3}} variant="h6" gutterBottom>{note.note}</Typography>
        <Typography variant="caption" gutterBottom>Written at: {note.date} </Typography>
        {note.updatedDate && <Typography variant="caption" gutterBottom>Updated at: {note.updatedDate} </Typography>}
        <Button variant="contained" onClick={handleDelete}>Delete</Button>
    </li>
  )
}

export default Note