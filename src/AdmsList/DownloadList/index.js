import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom';

const DownloadList = () => {
  return (
    <div>
        <Navbar />
    <div className='dalst-container'>
      <Sidebar />
      <div className='dalst-content'>
        <div className='dalst-contain'>
        <h2 className='dalst-h2'>Download Admission List </h2>
            <div className='dalst'>
                <div className='dalst-one'>
                    <label>Choose session  : </label>
                    <input type='text'
                    className='dalst-input'
                    />
                </div>
                <div className='dalst-two'>
                <label>Choose Faculty  : </label>
                    <input type='text'
                    className='dalst-input' />
                </div>
                <div className='dalst-three'> 
                <label>Choose program  : </label>
                    <input type='text'
                    className='dalst-input' />
                </div>
                <Link to="/viewlist">
                <button className='dalst-but'>Download</button>
                </Link>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default DownloadList