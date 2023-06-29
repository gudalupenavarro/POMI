import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SeccionTask } from './components/SeccionTask'
import { Alert } from 'react-bootstrap';
import { ModalElement } from './components/Modal'
import { NewTask } from './components/NewTask'

function App() {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState('')
  const [tarea, setTarea] = useState([])

  const filterTask = (complete) => {
    if(search){
      const searchTask = tarea.filter(item => item.task.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      return searchTask.filter(item => item.complete === complete)
    }
    return tarea.filter(item => item.complete === complete)
  }

  return (
    <>
      <div className="container">
        <h3 className="text-center p-2">Lista de tareas</h3>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <input placeholder='Buscar tarea' className="form-control" />
            <input placeholder='Buscar tarea' onChange={event => setSearch(event.target.value)} className="form-control" />
          </div>
        </div>
      

        <ModalElement open={visible} setOpen={setVisible}>
          <NewTask />
          <NewTask setOpen={setVisible} setTarea={setTarea} tarea={tarea} />
        </ModalElement>
      </div>
    </>
  );
}
export default App;