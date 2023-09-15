import React from 'react'
import './styles.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const Session = () => {
  return (
    <div className='session'>
       <Navbar />
            <div className='session-container'>
                <Sidebar />
                <div className='session-contain'>
                    <div className='session-content'>
                    <h2 className='session-h2'>Update Session</h2>
                        <div className='sess'>
                            <p className='session-p'>Enter Session : </p>
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
                        <button className='session-but'>Update</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Session