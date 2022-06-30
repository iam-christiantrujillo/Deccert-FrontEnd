import './App.css';
import Menu from './componentes/menu/Menu';
import { useState } from 'react';
import Welcome from './componentes/welcome/Welcome';
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import MyNFT from './pages/MyNFT/MyNFT';
import Mint from './pages/Mint/Mint';
import {AnimatePresence} from 'framer-motion/dist/framer-motion'

function App() {

  const [estado, setEstado] = useState(0)

  // const location=useLocation()

  return (
    <div className="App">
      <BrowserRouter>
      <Menu setEstado={setEstado}/>

      <AnimatePresence>
      <Routes 
      // location={location} key={location.path}
      >

        <Route exact path='/welcome' element={<Welcome/>}></Route>
        <Route exact path='/nft' element={<MyNFT/>}></Route>
        <Route exact path='/mint' element={<Mint/>}></Route>
        <Route exact path='/' element={<Welcome/>}></Route>


      </Routes>
      </AnimatePresence>

      </BrowserRouter>





    </div>
  );
}

export default App;
