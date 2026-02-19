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
        <Tercomp nombre="DevLens" image="" parrafo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
        <Tercomp nombre="StyleSpy" image src="" parrafo="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " />
        <Tercomp nombre="SpeedBoost" image src="" parrafo="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised " />
        <Tercomp nombre="JSONWizard" image src="" parrafo="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum" />
        <Tercomp nombre="TabMaster Pro" image src="" parrafo="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " />
        <Tercomp nombre="ViexportBuddy" image src="" parrafo="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " />
        <Tercomp nombre="Markup Notes" image src="" parrafo="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " />
        <Tercomp nombre="GridGuides" image src="" parrafo="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " />
        <Tercomp nombre="Palette Picker" image src="" parrafo="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " />
        <Tercomp nombre="LinkChecker" image src="" parrafo="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " />
        <Tercomp nombre="DOM Snapshot" image src="" parrafo="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " />
        <Tercomp nombre="ConsolePlus" image src="" parrafo="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " />
        
      </div>
    </>

  )

}

export default App
