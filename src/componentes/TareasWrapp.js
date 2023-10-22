import React, {useState} from 'react'
import TareasForm from './TareasForm'
import { v4 as uuidv4 } from 'uuid';
import { Editar } from './Editar';
import Tareas, { Todo } from './Tareas';


uuidv4();

export const TareasWrapp = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo =>{ 
    setTodos([...todos, {id: uuidv4(), task: todo,
       completed: false, isEditing: false}])
       console.log(todos)
      }

      const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id == id ? {
           ...todo, completed : !todo.completed} :todo))
      }
    
      
      const deleteTodo = id =>{
        
        setTodos(todos.filter(todo=> todo.id !== id))
      }

      const editTodo = id => {
      
      setTodos(todos.map(todo => todo.id === id ? {... todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? {...
      todo, task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodosWrapper'>
        <h1>Hace tus todos!</h1>
        <TareasForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
         todo.isEditing ? (
            <Editar editTodo={editTask} task= {todo}/>
          ) : (
          <Todo task={todo} key={index} 
          toggleComplete={toggleComplete}
           deleteTodo={deleteTodo}
           editTodo={editTodo}/>
           )

        ))}
    </div>
  )
}

export default TareasWrapp
