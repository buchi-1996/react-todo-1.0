import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import FullScreenDialog from './components/DialogForm';
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      title: 'walk the dog',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'take rubbish out',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'meet with girlfriend for dinner',
      completed: false
    }
  ]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  // Toggle Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleCloseMenu = (e) => {
    if (e.target.classList.contains('menu')) {
      setNotes([]);
    }
    setAnchorEl(null);
  }



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains('MuiButton-root' && 'MuiButton-label')){
      input !== '' && setNotes(prev => [{id: uuidv4(), title: input, completed: false}, ...prev]);
      setOpen(false);
    }else{
      setOpen(false);
    }
    setInput('');
    
    
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const toggleComplete = (id) => {
     const checkItem = notes.map(note => {
        if(note.id === id){
          note.completed = !note.completed;
        }
        return note;
      })
      setNotes(checkItem);
  }

  const handleDelete = (id) => {
    const newArr = notes.filter(note => note.id !== id);
    setNotes(newArr);
  }

  return (
    <div className="app">
      <Navbar open={openMenu} openClick={handleOpenMenu} closeClick={handleCloseMenu} anchorEl={anchorEl} />
      <Todos notes={notes} toggleComplete={toggleComplete} handleDelete={handleDelete} />
      <IconButton onClick={handleClickOpen} color="secondary" className="add__btn">
        <AddIcon />
      </IconButton>
      <FullScreenDialog 
        open={open}
        handleCloseEvt={handleClose}
        input={input}
        addTodo={handleChange}
      />

    </div>
  );

  
}

export default App;
