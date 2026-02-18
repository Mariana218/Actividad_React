import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pricomp } from './componentes/Pricomp'
import { Segcomp } from './componentes/segcomp'
import { Tercomp } from './componentes/Tercomp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pricomp />
    <Segcomp />
    
    <div className="extensions-grid">
        <Tercomp name="DevLens" iconColor="#d1fae5" />
        <Tercomp name="StyleSpy" iconColor="#e0f2fe" />
        <Tercomp name="SpeedBoost" iconColor="#fee2e2" />
      </div>
    </>

  )

}

export default App
