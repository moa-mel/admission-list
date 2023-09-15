import React from 'react'
import './styles.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Help = () => {
  return (
    <div className='help'>
       <Navbar />
            <div className='help-container'>
                <Sidebar />
                <div className='help-contain'>
                    <div className='help-content'>
                    <p>Help</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Help