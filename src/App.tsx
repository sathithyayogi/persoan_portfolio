import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Techstack from './pages/Techstack';
;

function App() {

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
