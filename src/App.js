import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import FullScreenDialog from './components/DialogForm';
import Slide from '@material-ui/core/Slide';
import { green, amber, grey } from '@material-ui/core/colors';
import { v4 as uuidv4 } from 'uuid';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function App() {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  // Toggle Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleCloseMenu = (e) => {
    if (e.target.classList.contains('menu__list')) {
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
    if (e.target.classList.contains('MuiButtonBase-root') || e.target.classList.contains('MuiButton-label')) {
      input !== '' && setNotes(prev => [{ id: uuidv4(), title: input }, ...prev]);
      setOpen(false);
    } else {
      setOpen(false);
    }
    setInput('');

  };

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const toggleComplete = (id) => {
    const checkItem = notes.map(note => {
      if (note.id === id) {
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
      <Navbar
        open={openMenu}
        openClick={handleOpenMenu}
        closeClick={handleCloseMenu}
        anchorEl={anchorEl}
      />
      <Todos notes={notes}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
        inputEdit={input}
        setInput={text => setInput(text)}
        setNotes={note => setNotes(note)}
      />
      <IconButton onClick={handleClickOpen}
        color="secondary" className="add__btn">
        <AddIcon />
      </IconButton>
      <FullScreenDialog
        open={open}
        handleCloseEvt={handleClose}
        input={input}
        addTodo={handleChange}
        buttonText="save"
        Transition={Transition}
        back={green[500]}
      />

    </div>
  );


}

export default App;
