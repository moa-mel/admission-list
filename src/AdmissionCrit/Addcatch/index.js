import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const Addcatch = () => {
  return (
    <div className='adctch'>
       <Navbar />
            <div className='adctch-container'>
                <Sidebar />
                <div className='adctch-content'>
                    <div className='adctch-contain'>
                    <h1 className='adctch-h1'>Admission Criteria /<a href='!#' className='adctch-a'> Add to Catchment</a> </h1>
                    <p className='adctch-p'>Add Catchment</p>
                    <div className='adctch-one'>
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
                    <div className='adctch-two'>
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
                    <p className='adctch-pp'>Catchment percentage :</p>
                    <div className='adctch-three'>
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
                    <button className='adctch-butt'>Add</button>
                    </div>
                    </div>
                    </div>
    </div>
  )
}

export default Addcatch