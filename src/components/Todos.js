import React, { useState } from 'react'
import TodoLists from './TodoLists';
import FullScreenDialog from './DialogForm';
import './todos.css'
import { Slide } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Todos = ({ notes, toggleComplete, handleDelete, inputEdit, setInput, setNotes }) => {

    const [open, setOpen] = useState(false);
    const [editId, setEditId ] = useState('');

    const handleEditOpen = (id) => {
        setEditId(id);
        setOpen(true);
        notes.map(note => {
            if (note.id === id) {
                console.log(note);
                setInput(note.title);
            }
            return note;
        })
    }

    const handleUpdateEdit = (e) => {
        setInput(e.target.value);
    }

    const handleCloseEdit = (e) => {
        e.preventDefault();
        if(e.target.classList.contains('MuiButtonBase-root') || e.target.classList.contains('MuiButton-label')){

            notes.map(note => {
                if(note.id === editId){
                    note.title = inputEdit;
                }
                return note;
            })
            console.log(notes)
            setNotes(notes);
            setOpen(false);
          }else{
            setOpen(false);
          }
          setInput('');
    }

    return (
        <>
            <div className="todos__wrapper">
                {notes.map((note, index) => (<TodoLists key={index} {...note} toggleComplete={toggleComplete} handleDelete={handleDelete} open={handleEditOpen} />))}
            </div>

            <FullScreenDialog
                open={open}
                handleCloseEvt={handleCloseEdit}
                input={inputEdit}
                addTodo={handleUpdateEdit}
                buttonText="save edit"
                Transition={Transition}
                back="goldenrod"
            />
        </>
    )
}

export default Todos
