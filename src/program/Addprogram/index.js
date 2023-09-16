import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const Addprogram = () => {
    return (
        <div className='adp'>
            <Navbar />
            <div className='adp-container'>
                <Sidebar />
                <div className='adp-content'>
                    <div className='adp-contain'>
                        <h2 className='ads-h2'>Add Program</h2>
                        <div className='adprg-up'>
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
                        <p className='adprg-pp'>Subject Combination:</p>
                        <div className='adprg-down'>
                            <div className='adprg-1'>
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
                            <div className='adprg-2'>
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
                            <div className='adprg-3'>  <div>
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
                            <div className='adprg-4'>
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
                        <button className='adprg-but'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addprogram