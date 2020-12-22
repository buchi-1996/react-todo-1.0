import React from 'react'
import TodoLists from './TodoLists';
import './todos.css'

const Todos = ({texts}) => {
    return (
        <div className="todos__wrapper">
            {texts.map((text, index) => (<TodoLists key={index} text={text}/>))}
        </div>
    )
}

export default Todos
