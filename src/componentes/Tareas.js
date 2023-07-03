import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const Tareas = ({task, toggleComplete}) => {
 
  return (
    <div className="tarea">
      

      <p onClick={() => toggleComplete(task.id) } className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>   
       
        <div>
          <FontAwesomeIcon className='pen' icon={faPenToSquare} />
            <FontAwesomeIcon className='trash' icon={faTrash} />
        </div>
    </div>
  )
}


