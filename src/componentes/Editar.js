import React, {useState} from 'react'
import TareasForm from './TareasForm'



export const Editar = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("")
    }

    
  return (
    <form className='TareasForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' placeholder='Editar Tarea'
         value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='tarea-btn'>Editar Tarea</button>
    </form>
  )
}

export default TareasForm
