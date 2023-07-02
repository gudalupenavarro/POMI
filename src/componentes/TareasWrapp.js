import React, {useState} from 'react'
import TareasForm from './TareasForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const TareasWrapp = () => {
  const [tareas, setTareas] = useState([])
  const addTareas = tareas =>
    setTareas([...tareas, {id: uuidv4(), task: tareas,
       completed: false, isEditing: false}])
       console.log(tareas)

  return (
    <div className='tareasWrapper'>
        <TareasForm addTareas={addTareas}/>
        
      
    </div>
  )
}

export default TareasWrapp
