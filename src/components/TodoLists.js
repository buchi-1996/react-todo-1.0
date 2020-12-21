import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './todoList.css';

const TodoLists = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }
    return (
        <div className="todo__card">
           <div className="todo__cardItem">
           <Checkbox
           className="checkBox"
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <div className="card__details">
            <h4 className="card__title">Going to the bakery</h4>
            <p className="card__subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quibusdam?</p>
            </div>
           </div>
            <div className="card__time">11:36PM</div>
        </div>
    )
}

export default TodoLists
