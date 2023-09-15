import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom';

const Scview = () => {
  return (
    <div className='scv'>
    <Navbar />
    <div className='scv-container'>
      <Sidebar />
      <div className='scv-content'>
        <div className='scv-contain'>

        </div>
        </div>
        </div>
      </div>
  )
}

export default Scview