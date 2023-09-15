import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom';
import { Select } from '@chakra-ui/react'

const DownloadAd = () => {
  return (
    <div className='dadm'>
    <Navbar />
    <div className='dadm-container'>
      <Sidebar />
      <div className='dadm-content'>
        <div className='dadm-contain'>
        <h2 className='dadm-h2'>Download Admission Criteria</h2>
            <div className='dadmm'>
                            <p className='dadm-p'>Admission type (Merit/Catchment/ELDs) : </p>
                            <Select placeholder='Select option' size='md'
                            bg='white'
                            borderColor='white'
                            color='black'
                            width="400px"
                            >
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                        </div>
                        <div className='dadm2'>
                            <p className='dadm2-p'>Choose Session : </p>
                            <Select placeholder='Select option' size='md'
                            bg='white'
                            borderColor='white'
                            color='black'
                            width="400px"
                            >
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                        </div>
                        <button className='dadm2-but'>Download</button>
        </div>
        </div>
        </div>
      </div>
  )
}

export default DownloadAd