import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom';
import { Select } from '@chakra-ui/react'
import GB from "../../images/Go back.png"

const AddUser = () => {
  return (
    <div className='ads'>
      <Navbar />
      <div className='ads-container'>
        <Sidebar />
        <div className='ads-content'>
          <div className='ads-contain'>
            <h2 className='ads-h2'>Add User</h2>
            <h3 className='ads-h3'>Title</h3>
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
            <div className='ads-up'>
              <div className='ads-1'>
                <label>Surname:</label>
                <input type='text'
                  required
                  className='ads-input' />
              </div>
              <div className='ads-2'>
                <label>Other Names:</label>
                <input type='text'
                  className='ads-input'
                  required />
              </div>
            </div>
            <div className='ads-down'>
              <div className='ads-3'>
                <label>E-mail:</label>
                <input type='text'
                  required
                  className='ads-input' />
              </div>
              <div className='ads-4'>
                <label>Faculty:</label>
                <input type='text'
                  className='ads-input'
                  required />
              </div>
            </div>
            <button className='ads-but'>Add</button>
            <img src={GB} alt='' className='ads-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser