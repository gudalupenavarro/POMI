import React, {useState} from 'react'


export const TareasForm = ({addTareas}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTareas(value)
        setValue("")
    }

    
  return (
    <form className='tareasForm' onSubmit={handleSubmit}>
        <input className='tareasInput' type='text' placeholder='Cual es tu tarea hoy?'
         value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='tarea-btn'>Agregar Tarea </button>
    </form>
  )
}

export default TareasForm
