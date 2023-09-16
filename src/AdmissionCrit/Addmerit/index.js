import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const Addmerit = () => {
  return (
    <div className='admrt'>
            <Navbar />
            <div className='admrt-container'>
                <Sidebar />
                <div className='admrt-content'>
                    <div className='admrt-contain'>
                    <h1 className='admrt-h1'>Admission Criteria /<a href='!#' className='admrt-a'> Add to Merit</a> </h1>
                    <p className='admrt-p'>Add merit</p>
                    <div className='admrt-one'>
                      <div className='admrt-1'>
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
                      <div className='admrt-2'>
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
                    <div className='admrt-two'>
                      <div className='admrt-3'>
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
                    <button className='admrt-but'>Add</button>
                    </div>
                    </div>
                    </div>
    </div>
  )
}

export default Addmerit