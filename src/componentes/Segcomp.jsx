import React from 'react'
import '../stylesheets/Segcom.css'

export const Segcomp = () => {
  return (
    <div className="list-container">
      <div className="list-header">
        <h2 className="list-title">Extensions List</h2>
        
        <div className="filter-group">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Active</button>
          <button className="filter-btn">Inactive</button>
        </div>
      </div>
    </div>
  )
}
