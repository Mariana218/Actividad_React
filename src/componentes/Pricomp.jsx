import React from 'react'
import '../stylesheets/Pricomp.css'

export const Pricomp = () => {
  return (
    <div className='pricomp'>
      <img style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
      }} src="unnamed.jpg" alt="" />
        <h1 style={{
          fontSize: '18px',
          color: 'white',
          textAlign: 'left',
          marginTop: '20px',
          fontWeight: 'bold',
          height: '100%',
          width: '100%',
        }}>Extensions</h1>
    </div>
  )
}
