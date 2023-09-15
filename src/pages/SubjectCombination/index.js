import React from 'react'
import './styles.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'

const SubjectCombination = () => {
    return (
        <div className='subject'>
            <Navbar />
            <div className='subject-container'>
                <Sidebar />
                <div className='subject-content'>
                <div className='subject-contain'>
                <h2 className='subject-h2'>Session</h2>
                        <div className='subj'>
                            <p className='subj-p'>Choose Session : </p>
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
                        <button className='subj-but'>View</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectCombination