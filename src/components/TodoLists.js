import { Divider, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

import './todoList.css';

const TodoLists = (props) => {

    return (
        <div className="todo__card">
            <Divider />
            <ListItem button>
                <ListItemText primary={props.text} secondary={(<i>uncategorized</i>)} />
            </ListItem>

        </div>
    )
}

export default TodoLists
