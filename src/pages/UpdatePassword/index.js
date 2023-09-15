import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const UpdatPassword = () => {
  return (
    <div className='updatepassword'>
      <Navbar />
      <div className='upp-container'>
        <Sidebar />
        <div className='upp-contain'>
          <div className='upp-content'>
            <h2 className='upp-h2'>Update Password</h2>
            <div className='upp'>
              <p className='upp-p'>Current Password :  </p>
              <input type='text'
                className='upp-input' />
            </div>
            <div className='upp2'>
              <p className='upp2-p'>New Password : </p>
              <input type='text'
                className='upp-input' />
            </div>
            <div className='upp3'>
              <p className='upp3-p'>Confirm New Password :  </p>
              <input type='text'
                className='upp-input' />
            </div>
            <button className='upp-but'>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatPassword