import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu, Fade } from '@material-ui/core';
import './toggleMenu.css'



const ToggleMenu = ({open, onClick, onClose, anchorEl}) => {
    return (
        <>
            <IconButton color="inherit" aria-controls="fade-menu" aria-haspopup="true" onClick={onClick}>
                <MoreVertIcon />
            </IconButton>

            <Menu
                className="menu"
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={onClose}
                TransitionComponent={Fade}
            >
                <MenuItem  className="menu__list" onClick={onClose}>DeleteAll</MenuItem>
            </Menu>
        </>
    )
}

export default ToggleMenu
