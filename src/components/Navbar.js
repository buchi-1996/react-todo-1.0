import React from 'react'
import {AppBar } from '@material-ui/core';
import './navbar.css';

const Navbar = () => {
    return (
        <AppBar  position="static" className="header">
            <h3 className="header__title">ToDo List</h3>
        </AppBar>
    )
}

export default Navbar
