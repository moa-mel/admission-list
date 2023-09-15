import React from 'react'
import './styles.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const AdmissionList = () => {
  return (
    <div className='admit'>
      <Navbar />
      <div className='admit-container'>
        <Sidebar />
        <div className='admit-contain'>
          <div className='admit-content'>
            <h2 className='admit-h2'>View Admission list</h2>
            <div className='adm'>
              <p className='admit-p'>Choose Session :  </p>
              <Select placeholder='Select option' size='md'
                bg='white'
                borderColor='white'
                color='black'
                width="250px"
              >
                <option value='option1'></option>
                <option value='option2'></option>
                <option value='option3'></option>
              </Select>
            </div>
            <div className='admit2'>
              <p className='admit2-p'>Choose Faculty : </p>
              <Select placeholder='Select option' size='md'
                bg='white'
                borderColor='white'
                color='black'
                width="250px"
              >
                <option value='option1'></option>
                <option value='option2'></option>
                <option value='option3'></option>
              </Select>
            </div>
            <div className='admit3'>
              <p className='admit3-p'>Choose Department :  </p>
              <Select placeholder='Select option' size='md'
                bg='white'
                borderColor='white'
                color='black'
                width="250px"
              >
                <option value='option1'></option>
                <option value='option2'></option>
                <option value='option3'></option>
              </Select>
            </div>
            <button className='admit-but'>View</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionList