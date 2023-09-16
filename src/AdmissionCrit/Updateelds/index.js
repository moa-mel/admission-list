import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const Updateelds = () => {
  return (
    <div className='upeld'>
       <Navbar />
            <div className='upeld-container'>
                <Sidebar />
                <div className='upeld-content'>
                    <div className='upeld-contain'>
                    <h1 className='upeld-h1'>Admission Criteria /<a href='!#' className='adeld-a'>Update ELDs</a> </h1>
                    <p className='upeld-p'>Update ELDs</p>
                    <div className='upeld-one'>
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
                    <div className='upeld-two'>
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
                    <p className='upeld-pp'>Catchment percentage :</p>
                    <div className='upeld-three'>
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
                    <button className='upeld-butt'>Update</button>
                    </div>
                    </div>
                    </div>
    </div>
  )
}

export default Updateelds