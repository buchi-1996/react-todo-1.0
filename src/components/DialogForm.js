import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './dialog.css'

const useStyles = makeStyles((theme) => ({
  appBar: props => ( {
    position: 'relative',
    background: `${props.background} !important`,
  }),
  
}));





export default function FullScreenDialog({open, handleCloseEvt, input, addTodo, buttonText, Transition, back}) {
  const props = {
    background: back,
  }
  const classes = useStyles(props);


  return (
      <Dialog fullScreen open={open} onClose={handleCloseEvt} TransitionCompnent={Transition} >
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className="top__bar">
            <IconButton edge="start" color="inherit" onClick={handleCloseEvt} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Button  autoFocus color="inherit" onClick={handleCloseEvt} className="save__btn">
              {buttonText}
            </Button>
          </Toolbar>
        </AppBar>
        <form>
            <textarea autoFocus value={input} onChange={addTodo} className="text__field" id="note" placeholder="write a note"></textarea>
        </form>
      </Dialog>
  );
}