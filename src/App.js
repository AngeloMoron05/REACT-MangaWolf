import './App.css';
import Inicio from './components/Inicio';
import NotFound from './components/NotFound';
import Registro from './components/Registro';
import Login from './components/Login';
import Sesion from './components/Sesion';
import {Routes, Route, HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/sesion" element={<Sesion/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
    
  );
}

export default App;
