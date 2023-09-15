import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Signout = () => {
  return (
    <div className='signout'> 
      <Navbar />
    <div className='signout-container'>
        <Sidebar />
        <div className='signout-contain'>
            <div className='signout-content'>
              <p>Signout</p>
            </div>
        </div>
    </div></div>
  )
}

export default Signout