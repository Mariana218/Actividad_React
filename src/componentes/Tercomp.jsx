import React from 'react'
import '../stylesheets/Pricomp.css'

export const Tercomp = () => {
  return (
    <>
    <div className="tarjet">
      <div className="card-header">
        <div className="icon-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="11" cy="11" r="3"></circle>
            <path d="m16 16-2-2"></path>
          </svg>
        </div>
        <div className="card-content">
          <h3 className="tarjet-title">DevLens</h3>
          <p className="tarjet-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolorum!</p>
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
