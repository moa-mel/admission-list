import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const StudentList = () => {
    return (
        <div className='student'>
            <Navbar />
            <div className='student-container'>
                <Sidebar />
                <div className='student-contain'>
                    <div className='student-content'>
                    <h2 className='student-h2'>Upload Student list</h2>
            <div className='studens'>
                            <p className='student-p'>Choose Session :  </p>
                            <Select placeholder='Select option' size='md'
                            bg='white'
                            borderColor='white'
                            color='black'
                            width="250px"
                            >
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                        </div>
                        <div className='student2'>
                            <p className='student2-p'>Choose Faculty : </p>
                            <Select placeholder='Select option' size='md'
                            bg='white'
                            borderColor='white'
                            color='black'
                            width="250px"
                            >
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                        </div>
                        <div className='student3'>
                            <p className='student3-p'>Choose Department :  </p>
                            <Select placeholder='Select option' size='md'
                            bg='white'
                            borderColor='white'
                            color='black'
                            width="250px"
                            >
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                        </div>
                        <button className='student-but'>View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentList