import React, {useState} from 'react'


export const TareasForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("")
    }

    
  return (
    <form className='TareasForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' placeholder='Cual es tu tarea hoy?'
         value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='tarea-btn'>Agregar Tarea </button>
      
    </form>



    )
}
export default TareasForm
