import React, {useState} from "react";
import logo from './logo.svg';
import Header from './componentes/Header';
import Form from "./componentes/Form";


import './App.css';


const App = () => {

  const [input, setInput] = useState("");
  const[tareas, setTareas] =useState([]);
  return (

    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          tareas={tareas}
          setTareas={setTareas}
          />
          </div>
      </div>
    </div>

);
};


export default App;
