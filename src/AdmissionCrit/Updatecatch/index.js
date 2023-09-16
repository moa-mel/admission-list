import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const Updatecatch = () => {
  return (
    <div className='upctch'>
       <Navbar />
            <div className='upctch-container'>
                <Sidebar />
                <div className='upctch-content'>
                    <div className='upctch-contain'>
                    <h1 className='upctch-h1'>Admission Criteria /<a href='!#' className='upctch-a'> Update to Catchment</a> </h1>
                    <p className='upctch-p'>Update Catchment</p>
                    <div className='upctch-one'>
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
                    <div className='upctch-two'>
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
                    <p className='upctch-pp'>Catchment percentage :</p>
                    <div className='upctch-three'>
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
                    <button className='upctch-butt'>Update</button>
                    </div>
                    </div>
                    </div>
    </div>
  )
}

export default Updatecatch