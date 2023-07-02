import React from 'react'

const TareasForm = () => {
  return (
    <form className='tareasForm'>
        <input className='tareasInput' type='text' placeholder='Cual es tu tarea hoy?'/>
        <button type='submit' className='tarea-btn'>Agregar Tarea </button>
    </form>
  )
}

export default TareasForm
