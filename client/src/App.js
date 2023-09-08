import './App.css';
import {Routes, Route} from 'react-router-dom'; //podemos definir las rutas
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import { useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
function App() {

  const {pathname} =useLocation(); 
  // {/* con este hook  puedo saber en que ruta se encuentra */}

  return (
    <div className="App">

        {pathname !== '/' && <NavBar />} {/*cuanto se encuentre en la landing page no se renderizara la NavBar*/}
      <Routes >
        <Route path='/' element={<Landing />} />
        
        <Route path='/home' element={<Home />}/>

        <Route path='/detail/:id' element={<Detail />}/>

        <Route path='/form' element={<Form />}/>
  
      </Routes>
    </div>
  );
}

export default App;
