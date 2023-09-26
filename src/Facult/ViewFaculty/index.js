import React, { useEffect, useState } from 'react'
import './styles.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import grply from "../../images/Vector(3).png"
import delet from "../../images/Vector(4).png"
import { useDispatch, useSelector } from 'react-redux';
import { getFaculty, deleteFaculty } from '../../redux/FacultySlice'
import { Link } from 'react-router-dom';

const customStyles = {
    content: {
        top: '50%',
        border: '1px solid #fff',
        left: '50%',
        right: 'auto',
        width: '30%',
        height: '50%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const ViewFaculty = () => {


    const dispatch = useDispatch();
    const { faculties: facultiesArray, loading, currentPage } = useSelector(state => state.faculties);
    console.log('facultiesArray:', facultiesArray);
    console.log('loading:', loading);
    const [page, setPage] = useState(1);

    let fetchMount = true;

    useEffect(() => {
        if (fetchMount) {
            dispatch(getFaculty(page))
            console.log('Dispatched getFaculty');
        }
        return () => {
            fetchMount = false;
        }
    }, [dispatch, page])

    // Handle page change
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };


    if (loading) return <div>Loading...</div>


    return (
        <div>
            <Navbar />
            <div className='vf-container'>
                <Sidebar />
                <div className='vf-content'>
                    <div className='vf-contain'>

                        <div className='top-table'>
                            <div className='ttable'>
                                <p className='tt-p'>Show</p>
                                <div className='tt-num'>
                                    <div>
                                        <NumberInput size='sm' maxW={20} defaultValue={15} min={10}>
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </div>
                                    <p>Entries</p>
                                </div>
                            </div>
                            <div className='tt-delete' >
                                <img src={delet} alt='' className='tt-del' />
                                <p >Delete</p>
                            </div>
                        </div>
                        <div className='pagination'>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span>Page {currentPage}</span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={facultiesArray.length < 50} // Adjust this based on your API response
                            >
                                Next
                            </button>
                        </div>
                        <div className='rfg'>
                            <TableContainer >
                                <Table variant='simple' size="sm" >
                                    <Thead>
                                        <Tr>
                                            <Th isNumeric>S/N</Th>
                                            <Th>Faculty</Th>
                                            <Th>Status</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {Array.isArray(facultiesArray) && facultiesArray.map((faculty, i) => (
                                            <Tr key={faculty.id}>
                                                <Td isNumeric fontSize="11.5px">
                                                    <div className='ola'>
                                                        <img src={grply} alt='' />
                                                        <p>{i + 1}</p>
                                                    </div>
                                                </Td>
                                                <Td fontSize="11.5px">{faculty.faculty}</Td>
                                                <Td fontSize="11.5px">
                                                    <div className='status-div'>
                                                        <div className='fac-mini'>
                                                            <p>Enable</p>
                                                        </div>
                                                        <div className='fac-nimi'>
                                                            <p>Disable</p>
                                                        </div>
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <div className='vf-action'>
                                                        <div>
                                                            <Link to={`/faculty/${faculty.id}/edit`}>
                                                                <p>Edit</p>
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <p onClick={() => dispatch(deleteFaculty(faculty))}>Delete</p>
                                                        </div>
                                                    </div>
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewFaculty