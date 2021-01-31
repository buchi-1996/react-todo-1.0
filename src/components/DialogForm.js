import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import { green, red, purple, blue } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './dialog.css'
import { Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: props => ({
    position: 'relative',
    background: `${props.background} !important`,
  }),

  bottomAppBar: {
    top: 'auto',
    bottom: 0,
    background: '#fff !important'
  },

  Toolbar: {
    justifyContent: 'space-around !important',
  },

  office: {
    color: `${green[500]} !important`,
    '& .MuiFab-label': {
      pointerEvents: 'none'
    }
  },

  home: {
    color: `${blue[500]} !important`,
    '& .MuiFab-label': {
      pointerEvents: 'none'
    }
  },

  gym: {
    color: `${red[500]} !important`,
    '& .MuiFab-label': {
      pointerEvents: 'none'
    }
  },

  church: {
    color: `${purple[500]} !important`,
    '& .MuiFab-label': {
      pointerEvents: 'none'
    }
  }


}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});



export default function FullScreenDialog({ open, handleCloseEvt, input, addTodo, buttonText, back, onClick }) {
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
          </IconButton >
          <Button autoFocus color="inherit" onClick={handleCloseEvt} className="save__btn">
            {buttonText}
          </Button>
        </Toolbar>
      </AppBar>
      <form>
        <textarea autoFocus value={input} onChange={addTodo} className="text__field" id="note" placeholder="write a note"></textarea>
      </form>
      <AppBar position="fixed" className={classes.bottomAppBar}>
        <Toolbar className={classes.Toolbar}>
          <Tooltip title="Home">
            <Fab onClick={() => onClick('Home')} size="small" className={classes.home}>
              <HomeWorkIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Office">
            <Fab onClick={() => onClick('Office')} size="small" className={classes.office}>
              <EmojiTransportationIcon/>
            </Fab>
          </Tooltip>
          <Tooltip title="Church">
            <Fab onClick={() => onClick('Church')} size="small" className={classes.church}>
              <AccountBalanceIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Gym">
            <Fab onClick={() => onClick('Gym')}  size="small" className={classes.gym}>
              <FitnessCenterIcon />
            </Fab>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Dialog>
  );
}