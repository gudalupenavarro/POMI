import React, {useState} from 'react'
import { Tareas } from './Tareas';
import TareasForm from './TareasForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const TareasWrapp = () => {
  const [tareas, setTareas] = useState([])

  const addTareas = tareas =>{ 
    setTareas([...tareas, {id: uuidv4(), task: tareas,
       completed: false, isEditing: false}])
       console.log(tareas)
      }

      const toggleComplete = id => {
        setTareas(tareas.map(tareas => tareas.id == id ? {
           ...tareas, completed : !tareas.completed} :tareas))
      }
    
  return (
    <div className='tareasWrapper'>
        <h1>Hace tus tareas!</h1>
        <TareasForm addTareas={addTareas}/>
        {tareas.map((tareas, index) => (
          <Tareas task={tareas} key={index} toggleComplete={toggleComplete} />
       
        ))}
    </div>
  )
}

export default TareasWrapp
