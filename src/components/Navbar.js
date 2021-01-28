import React from 'react'
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import ToggleMenu from './ToggleMenu';


const useStyles = makeStyles((theme) => ({
    appBar: {
        background: theme.palette.primary.main = deepPurple[500],
        padding: '8px 15px',
        '& div': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& h3': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }
    }
}))

const Navbar = ({ open, openClick, closeClick, anchorEl }) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <div>
                <h3>
                    NotePad-- 🚀 
                </h3>
                <ToggleMenu open={open} onClick={openClick} onClose={closeClick} anchorEl={anchorEl} />
            </div>
        </AppBar>
    )
}

export default Navbar
