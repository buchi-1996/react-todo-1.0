import React from 'react'
import { AppBar } from '@material-ui/core';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

import './navbar.css';
import ToggleMenu from './ToggleMenu';

const Navbar = ({open, openClick, closeClick, anchorEl}) => {
    return (
        <AppBar position="static" className="header">
            <div className="header__nav">
                <h3 className="header__title">TodoList <CollectionsBookmarkIcon/> </h3>
                <ToggleMenu open={open} onClick={openClick} onClose={closeClick} anchorEl={anchorEl}/>
            </div>
        </AppBar>
    )
}

export default Navbar
