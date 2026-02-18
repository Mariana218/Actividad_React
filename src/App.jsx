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
    </>
  )

}

export default App
