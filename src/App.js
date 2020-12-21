import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';

function App() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="app">
      <Navbar />
      <Todos />
      <IconButton onClick={handleClickOpen} color="secondary" className="add__btn">
        <AddIcon />
      </IconButton>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle className="dialog__heading">Enter a new Todo item</DialogTitle>
        <hr />
        <DialogContent className="dialog__box">
          <DialogContentText>
            <form>
              <textarea name="todo" id="todo" cols="30" rows="20"></textarea>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
