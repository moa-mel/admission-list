import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const Addelds = () => {
  return (
    <div className='adeld'>
       <Navbar />
            <div className='adeld-container'>
                <Sidebar />
                <div className='adeld-content'>
                    <div className='adeld-contain'>
                    <h1 className='adeld-h1'>Admission Criteria /<a href='!#' className='adeld-a'> Add to ELDs</a> </h1>
                    <p className='adeld-p'>Add to ELDs</p>
                    <div className='adeld-one'>
                      <div>
                      <label>Faculty :</label>
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
                      <div>
                      <label>Program :</label>
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
                    <div className='adeld-two'>
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
                    <p className='adeld-pp'>Catchment percentage :</p>
                    <div className='adeld-three'>
                      <Select placeholder='Select option' size='md'
                            bg='white'
                            borderColor='white'
                            color='black'
                            width="100px"
                            >
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                            <Select placeholder='Select option' size='md'
                            bg='white'
                            borderColor='white'
                            color='black'
                            width="100px"
                            >
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                            <Select placeholder='Select option' size='md'
                            bg='white'
                            borderColor='white'
                            color='black'
                            width="100px"
                            >
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                            <Select placeholder='Select option' size='md'
                            bg='white'
                            borderColor='white'
                            color='black'
                            width="100px"
                            >
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                    </div>
                    <button className='adeld-butt'>Add</button>
                    </div>
                    </div>
                    </div>
    </div>
  )
}

export default Addelds