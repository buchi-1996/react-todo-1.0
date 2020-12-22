import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import FullScreenDialog from './components/DialogForm';




function App() {
  const [notes, setNotes] = useState(['walk the dog', 'take rubbish out']);
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    input !== '' && setNotes(prev => [input, ...prev]);
    setInput('');
    setOpen(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  }

 
  return (
    <div className="app">
      <Navbar />
      <Todos texts={notes} />
      <IconButton onClick={handleClickOpen} color="secondary" className="add__btn">
        <AddIcon />
      </IconButton>
      <FullScreenDialog open={open}
        handleCloseEvt={handleClose}
        input={input}
        onChange={handleChange}
       />

    </div>
  );
}

export default App;
