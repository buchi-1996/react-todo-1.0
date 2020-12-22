import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './dialog.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({open, handleCloseEvt, input, onChange}) {
  const classes = useStyles();
    


  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleCloseEvt} TransitionComponent={Transition}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className="top__bar">
            <IconButton edge="start" color="inherit" onClick={handleCloseEvt} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Button  autoFocus color="inherit" onClick={handleCloseEvt}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form>
            <textarea value={input} onChange={onChange} className="text__field" id="note" placeholder="write a note"></textarea>
        </form>
      </Dialog>
    </div>
  );
}