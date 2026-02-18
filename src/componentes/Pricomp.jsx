import React from 'react'
import '../stylesheets/Pricomp.css'

export const Pricomp = () => {
  return (
    <>
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="logo-section">
          <img src="unnamed.jpg" alt="Logo" className="logo-img" />
          <h1 className="nav-title">Extensions</h1>
        </div>
        <button className="theme-toggle">
          ☀️
        </button>
      </div>
    </nav>
    </>)
}
