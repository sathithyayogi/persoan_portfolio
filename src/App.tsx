import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './components/About'
import Footer from './components/Footer'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default App
