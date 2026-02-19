import React from 'react'
import '../stylesheets/Tercomp.css'

export const Tercomp = ({nombre, image, parrafo}) => {
  return (
    <>
    <div className="tarjet">
      <div className="card-header">
        <div className="icon-container">
          {image}<svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="11" cy="11" r="3"></circle>
            <path d="m16 16-2-2"></path>
          </svg>
        </div>
        <div className="card-content">
          <h3 className="tarjet-title">{nombre}</h3>
          <p className="tarjet-desc">{parrafo}</p>
        </div>
      </div>
      
      <div className="card-footer">
        <button className="remove-btn">Remove</button>
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>
    </div>
    </>
  )
}
