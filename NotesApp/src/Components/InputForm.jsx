import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddModal from './AddModal';


const InputForm = ({addNote, editNote, selectedNote, setShow, show}) => {
    const [note, setNote] = useState(show ? selectedNote.note:'')
    const [title, setTitle] = useState(show ? selectedNote.title:'')

    const handleNoteChange = (e) => { 
        setNote(e.target.value)
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleNewNote = (e) => {
        e.preventDefault();

        if(!show){
            const newNote = {
                id: nanoid(),
                title: title,
                note: note,
                date: new Date().toLocaleString(),
            }
            addNote(newNote)
        }else{
            const editedNote = {
                ...selectedNote,
                title: title,
                note: note,
                updatedDate: new Date().toLocaleString(),
            }
            editNote(editedNote)
            setShow(false)
        }

        setNote('')
        setTitle('')
    } 
    

    
    return (
        <>
            <div className='formContainer'>
                <Typography sx={{ mb: 1.5 }} variant="h2">Notes</Typography>

                <form className='formCard' onSubmit={handleNewNote}>

                    <TextField sx={{ margin: 1 }} type='text' value={title} className='noteTitle' id="outlined-basic" label="Title" variant="outlined" placeholder='Title' onChange={handleTitleChange}/>
                    
                    <TextField sx={{ margin: 1 }} rows={4} className='textInput' id="outlined-textarea" label="" value={note} placeholder="Your Note!" onChange={handleNoteChange} multiline required/>

                   <Button sx={{ margin: 2.3 }} type='submit' className='submitButton' variant="contained"> 
                   {!show ? 'Submit' : 'Edit Note'}</Button>

                </form> 
            </div>
        </>
    )
}

export default InputForm