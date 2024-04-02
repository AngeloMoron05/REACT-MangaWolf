import './App.css';
import Inicio from './components/Inicio';
import NotFound from './components/NotFound';
import Registro from './components/Registro';
import {Routes, Route, HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/registro" element={<Registro/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
