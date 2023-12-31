import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom';
import { Select } from '@chakra-ui/react'

const Updateprogram = () => {
  return (
    <div className='uppg'>
    <Navbar />
    <div className='uppg-container'>
      <Sidebar />
      <div className='uppg-content'>
        <div className='uppg-contain'>
        <h2 className='ads-h2'>Update Program</h2>
                        <div className='uppg-up'>
                            <div className='ads-1'>
                                <label>Faculty:</label>
                                <input type='text'
                                    required
                                    className='adprg-input' />
                            </div>
                            <div className='ads-1'>
                                <label>Program:</label>
                                <input type='text'
                                    required
                                    className='adprg-input' />
                            </div>
                        </div>
                        <p className='uppg-pp'>Subject Combination:</p>
                        <div className='uppg-down'>
                            <div className='uppg-1'>
                                <div>
                                    <label>1</label>
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
                                    <label>2</label>
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
                            <div className='uppg-2'>
                                <div>
                                    <label>3</label>
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
                                    <label>4</label>
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
                            <div className='uppg-3'>  <div>
                                <label>5</label>
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
                                    <label>6</label>
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
                            <div className='uppg-4'>
                                <div>
                                    <label>7</label>
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
                                    <label>8</label>
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
                        </div>
                        <button className='uppg-but'>Update</button>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Updateprogram