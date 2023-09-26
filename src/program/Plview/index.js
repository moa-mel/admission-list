import React, { useEffect, useState } from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import stream from "../../images/streamline_interface-add-circle-button-remove-cross-add-buttons-plus-circle.png"
import excel from "../../images/Vector(1).png"
import grply from "../../images/Vector(3).png"
import delet from "../../images/Vector(4).png"
import close from "../../images/ic_baseline-cancel.png"
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
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse, deleteCourse } from '../../redux/CourseSlice'


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

const Plview = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#fff';
    }

    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        openModal(); // Open the modal when the form is submitted
    }

    function closeModal() {
        setIsOpen(false);
    }

    const dispatch = useDispatch();
    const { courses: coursesArray, loading, currentPage } = useSelector(state => state.courses);
    console.log('coursesArray:', coursesArray);
    console.log('loading:', loading);
    const [page, setPage] = useState(1);

    let fetchMount = true;

    useEffect(() => {
        if (fetchMount) {
            dispatch(getCourse(page))
            console.log('Dispatched getCourse');
        }
        return () => {
            fetchMount = false;
        }
    }, [dispatch, page])

   /* useEffect(() => {
        console.log('Redux State:', coursesArray); // Log the state
        console.log('Loading:', loading); // Log the loading state
      }, [coursesArray, loading]); */

    // Handle page change
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };


    if (loading) return <div>Loading...</div>

    return (
        <div className='plview'>
            <Navbar />
            <div className='plv-container'>
                <Sidebar />
                <div className='plv-content'>
                    <div className='plv-contain'>
                        <p>Program List</p>
                        <div className='user1'>

                            <div className='user2'>

                                <div className='prgm-one'>
                                    <Link to="/addprogram">
                                        <div className='program-add'>
                                            <img src={stream} alt='' className='us-img1' />
                                            <p className='adpg'>Add Program</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='user-two'>
                                    <img src={excel} alt='' className='us-img2' />
                                    <input type="file"
                                        placeholder='Upload New Users'
                                        className='us-input' />
                                </div>
                            </div>
                            <div className='user-8'>
                                <p>Search:</p>
                                <div className='user-three'>
                                    <input className='rp-input'
                                        type="text" />
                                </div>
                            </div>
                        </div>
                        {/*topTable*/}
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
                            <div className='tt-delete' onSubmit={handleFormSubmit}>
                                <img src={delet} alt='' className='tt-del' />
                                <p onClick={openModal}>Delete</p>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Loading Modal"
                                    ariaHideApp={true}
                                >
                                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>.</h2>
                                    <img onClick={closeModal} src={close} alt='' className='usmg-img' />
                                    <div className='usmg-box'>
                                        <p className='usmg-p'>You are about to delete the following. <br />
                                            Kindly enter your password to proceed</p>
                                        <input type='text'
                                            className='usmg-input'
                                            required />
                                        <button className='usmg-butt'>Proceed</button>
                                    </div>
                                </Modal>
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
                              /*  disabled={coursesArray.length < 50} */
                            >
                                Next
                            </button>
                        </div>
                        {/*table*/}
                        <div className='user-table'>
                            <TableContainer>
                                <Table variant='simple' size="sm" >
                                    <Thead>
                                        <Tr>
                                            <Th isNumeric>S/N</Th>
                                            <Th>Faculty</Th>
                                            <Th>Program</Th>
                                            <Th>Subject Combination</Th>
                                            <Th>Action</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {Array.isArray(coursesArray) && coursesArray.map((course, i) => (
                                            <Tr key={course.id}>
                                                <Td isNumeric fontSize="11.5px">
                                                    <div className='ola'>
                                                        <img src={grply} alt='' />
                                                        <p>{i + 1}</p>
                                                    </div>
                                                </Td>
                                                <Td fontSize="11.5px">{course.faculty}</Td>
                                                <Td fontSize="11.5px">{course.course}</Td>
                                                <Td fontSize="11.5px">
                                                    <div className='suj-div'>
                                                        <div className='suj-r'><p>{course.subject_1}</p></div>
                                                        <div className='suj-r'><p>{course.subject_2}</p></div>
                                                        <div className='suj-r'><p>{course.subject_3}</p></div>
                                                        <div className='suj-r'><p>{course.subject_4}</p></div>
                                                    </div>
                                                    <div className='suj2-div'>
                                                        <div className='suj-r'><p>{course.subject_5}</p></div>
                                                        <div className='suj-r'><p>{course.subject_6}</p></div>
                                                        <div className='suj-r'><p>{course.subject_7}</p></div>
                                                        <div className='suj-r'><p>{course.subject_8}</p></div>
                                                    </div>
                                                </Td>
                                                <Td fontSize="11.5px">
                                                    <div className='vf-action'>
                                                        <div>
                                                            <Link to='/'>
                                                                <p>Edit</p>
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <p onClick={() => dispatch(deleteCourse(course))}>Delete</p>
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

export default Plview