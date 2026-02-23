import React from 'react'
import '../stylesheets/Tercomp.css'

export const Tercomp = ({name, icon, description}) => {
  return (
    <>
    <div className="tarjet">
      <div className="card-header">
       <img src={icon} alt="DevLens Logo" className="extension-icon" />
        <div className="card-content">
          <h3 className="tarjet-title">{name}</h3>
          <p className="tarjet-desc">{description}</p>
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
