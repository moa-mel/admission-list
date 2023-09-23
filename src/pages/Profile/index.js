import React, { useState, useEffect } from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'





const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(()=>{
   console.log('user')
 },[])

  return (
    <div className='profile'>
       
      <Navbar />
      <div className='profile-content'>
        <Sidebar />
        <div className='p-cont'>
          <div className='profile-container'>
            <div className='profile-contain'>
           
              <div>
              <h2 className='prof-h2'>User's Information</h2>
            <div className='profile1'>
              <h3 className=''>Staff ID :  </h3>
              <p>{user.user.email}</p>
            </div>
            <div className='profile2'>
              <h3>Current Designation :</h3>
              <p>Super Admin</p>
            </div>
            <div className='profile3'>
              <h3>Faculty :</h3>
              <p>Faculty of pharmacy</p>
            </div>
            <div className='profile4'>
              <h3>Department :</h3>
              <p>Dept of Animal science</p>
            </div>
            </div>
            
            
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Profile