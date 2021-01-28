import React from 'react';
import { ListItem, ListItemText, IconButton } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
import './todoList.css';

const TodoLists = ({ id, title, completed, toggleComplete, handleDelete, open }) => {

    const textStyle = () => {
        return {
            textDecoration: !completed ? 'none' : 'line-through',
            flex: 1,
        }
    }



    return (
        <div className="todo__card">
            <ListItem divider  button className="card__inner">
                <IconButton onClick={() => toggleComplete(id)} >
                    {!completed ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}
                </IconButton>
                <ListItemText onClick={() => open(id)} primary={title} secondary={(<i>uncategorized</i>)} style={textStyle()} />
                <IconButton onClick={() => handleDelete(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>

        </div>
    )
}


export default TodoLists
