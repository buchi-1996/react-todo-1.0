import React from 'react';
import { Divider, ListItem, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import './todoList.css';

const TodoLists = ({id, title, completed, toggleComplete, handleDelete } ) => {

    const textStyle = () => {
       return {
           textDecoration: !completed ? 'none' : 'line-through'
       }
    }

    

    return (
        <div className="todo__card">
            <Divider />
            <ListItem className="card__inner">
                <Checkbox
                    onChange={() => toggleComplete(id)}

                />
                <ListItemText primary={title} secondary={(<i>uncategorized</i>)} style={textStyle()} />
                <IconButton onClick={() => handleDelete(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>

        </div>
    )
}


export default TodoLists
