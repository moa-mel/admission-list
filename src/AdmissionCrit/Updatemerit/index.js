import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const Updatemerit = () => {
  return (
    <div className='upmrt'>
       <Navbar />
            <div className='upmrt-container'>
                <Sidebar />
                <div className='upmrt-content'>
                    <div className='upmrt-contain'>
                    <h1 className='upmrt-h1'>Admission Criteria /<a href='!#' className='admrt-a'> Update Merit</a> </h1>
                    <p className='upmrt-p'>Update merit</p>
                    <div className='upmrt-one'>
                      <div className='upmrt-1'>
                        <label>Faculty:</label>
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
                      <div className='upmrt-2'>
                      <label>Program</label>
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
                    </div>
                    <div className='upmrt-two'>
                      <div className='upmrt-3'>
                      <label>Merit percentage :</label>
                      <input type='text'
                                    required
                                    className='admrt-input' />
                        
                      </div>
                      <div className='admrt-4'>
                      <label>Status :</label>
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
                    </div>
                    <button className='upmrt-but'>Update</button>
                    </div>
                    </div>
                    </div>
    </div>
  )
}

export default Updatemerit