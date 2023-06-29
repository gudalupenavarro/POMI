import logo from './logo.svg';
import Header from './componentes/Header';
import Form from "./componentes/Form";
import './App.css';


const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
          <Form/>
      </div>
    </div>

);
};


export default App;
