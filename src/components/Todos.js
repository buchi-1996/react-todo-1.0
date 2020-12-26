import React from 'react'
import TodoLists from './TodoLists';
import './todos.css'

const Todos = ({notes, toggleComplete, handleDelete}) => {
    return (
        <div className="todos__wrapper">
            {notes.map((note, index) => (<TodoLists key={index} {...note} toggleComplete={toggleComplete} handleDelete={handleDelete}/>))}
        </div>
    )
}

export default Todos
