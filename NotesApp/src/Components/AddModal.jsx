import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputForm from './InputForm';



const AddModal = ({show, setShow, selectedNote, editNote}) => {
    const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} >
    <Modal.Header closeButton></Modal.Header>  
       <InputForm  selectedNote={selectedNote} setShow={setShow} show={show} editNote={editNote}/>
    </Modal>
  )
}

export default AddModal