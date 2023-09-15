import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Programlist = () => {

    return (
        <div className='program'>
            <Navbar />
            <div className='program-container'>
                <Sidebar />
                <div className='program-content'>
                    <div className='program-contain'>
                        <h2 className='prog-h2'>Program List</h2>
                        <div className='prog'>
                            <p className='prog-p'>Choose Session : </p>
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
                        <Link to="/plview">
                        <button className='prog-but'>View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programlist