import React from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, tareas, setTareas}) => {
 
 const onInputChange =(event) => {
    setInput(event.target.value);
 };
    const onFormSubmit = (event) =>{
        event.preventDefault();
        setTareas([...tareas, {id: uuidv4(), title: input, completed: false}]);
        
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' placeholder="Agregue una tarea..." className="task-input" value={input} required onChange={onInputChange}/>
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    )
}