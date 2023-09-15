import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const AdmissionCriteria = () => {
  return (
    <div className='admissionCriteria'>
        <Navbar />
        <div className='admission-container'>
        <Sidebar />
        <div className='admission-contain'>
            <div className='admission-content'>
            <h2 className='ac-h2'>Admission Criteria </h2>
            <div className='ac'>
                            <p className='ac-p'>Admission type (Merit/Catchment/ELDs) : </p>
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
                        <div className='ac2'>
                            <p className='ac2-p'>Choose Session : </p>
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
                        <Link to='/downloadAdm'>
                        <button className='ac2-but'>View</button>
                        </Link>
            </div>
        </div>
        </div>
        </div>
  )
}

export default AdmissionCriteria