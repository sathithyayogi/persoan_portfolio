import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Techstack from './pages/Techstack';
import ReactGA from "react-ga4";

import { useEffect } from "react";


function App() {
  useEffect(()=>{

    const TRACKING_ID = 'G-QQ2LR9T5CS';
    ReactGA.initialize(TRACKING_ID);
  },[])


  return (
    <div className="App">
         <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/tech-stack' element={<Techstack />} />
      </Routes>
    </div>
  )
}

export default App
