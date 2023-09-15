import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom';
import { Select } from '@chakra-ui/react'
import GB from "../../images/Go back.png"

const UpdateUser = () => {
  return (
    <div className='upus'>
        <Navbar />
      <div className='upus-container'>
        <Sidebar />
        <div className='upus-content'>
          <div className='upus-contain'>
            <h2 className='upus-h2'>Update User</h2>
            <h3 className='upus-h3'>Title</h3>
            <Select placeholder='Select option' size='md'
              bg='white'
              borderColor='white'
              color='black'
              width="100px"
              required
            >
              <option value='option1'></option>
              <option value='option2'></option>
              <option value='option3'></option>
            </Select>
            <div className='upus-up'>
              <div className='upus-1'>
                <label>Surname:</label>
                <input type='text'
                  required
                  className='upus-input' />
              </div>
              <div className='upus-2'>
                <label>Other Names:</label>
                <input type='text'
                  className='upus-input'
                  required />
              </div>
            </div>
            <div className='upus-down'>
              <div className='upus-3'>
                <label>E-mail:</label>
                <input type='text'
                  required
                  className='upus-input' />
              </div>
              <div className='upus-4'>
                <label>Faculty:</label>
                <input type='text'
                  className='upus-input'
                  required />
              </div>
            </div>
            <button className='upus-but'>Add</button>
            <img src={GB} alt='' className='upus-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser