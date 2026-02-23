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
        <Tercomp icon="../logo-devlens.svg" name="DevLens" description="Quickly inspect page layouts and visualize element boundaries." />
        <Tercomp icon="/logo-style-spy.svg" name="StyleSpy" description="Instantly analyze and copy CSS from any webpage element." />
        <Tercomp icon="/logo-speed-boost.svg" name="SpeedBoost" description="Optimizes browser resource usage to accelerate page loading." />
        <Tercomp icon="/logo-json-wizard.svg" name="JSONWizard" description="Formats, validates, and prettifies JSON responses in-browser." />
        <Tercomp icon="/logo-tab-master-pro.svg" name="TabMaster Pro" description="Organizes browser tabs into groups and sessions." />
        <Tercomp icon="/logo-viewport-buddy.svg" name="ViewportBuddy" description="Simulates various screen resolutions directly within the browser." />
        <Tercomp icon="/logo-markup-notes.svg" name="Markup Notes" description="Enables annotation and notes directly onto webpages for collaborative debugging." />
        <Tercomp icon="/logo-grid-guides.svg" name="GridGuides" description="Overlay customizable grids and alignment guides on any webpage." />
        <Tercomp icon="/logo-palette-picker.svg" name="Palette Picker" description="Instantly extracts color palettes from any webpage." />
        <Tercomp icon="/logo-link-checker.svg" name="LinkChecker" description="Scans and highlights broken links on any page." />
        <Tercomp icon="/logo-dom-snapshot.svg" name="DOM Snapshot" description="Capture and export DOM structures quickly." />
        <Tercomp icon="/logo-console-plus.svg" name="ConsolePlus" description="Enhanced developer console with advanced filtering and logging." />
      </div>
    </>

  )

}

export default App
