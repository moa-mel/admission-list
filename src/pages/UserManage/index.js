import React from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import stream from "../../images/streamline_interface-add-circle-button-remove-cross-add-buttons-plus-circle.png"
import excel from "../../images/Vector(1).png"
import rplay from "../../images/Vector(2).png"
import grply from "../../images/Vector(3).png"
import delet from "../../images/Vector(4).png"
import menu from "../../images/Vector(1) 2.png"
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
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import Modal from 'react-modal';



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

const UserManage = () => {
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

    return (
        <div className='userManage'>
            <Navbar />
            <div className='user-container'>
                <Sidebar />
                <div className='user-side'>
                    <div className='user-contain'>
                        {/*top*/}
                        <div className='user1'>
                            <div className='user2'>
                                <div className='user-one'>
                                    <Link to="/adduser">
                                        <div className='user-add'>
                                            <img src={stream} alt='' className='us-img1' />
                                            <p>Add User</p>
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
                        {/*table*/}
                        <div className='user-table'>
                            <TableContainer>
                                <Table variant='simple' size="sm" >
                                    <Thead>
                                        <Tr>
                                            <Th isNumeric>S/N</Th>
                                            <Th>Title</Th>
                                            <Th>Surname</Th>
                                            <Th>Other Names</Th>
                                            <Th>E-mail</Th>
                                            <Th>Faculty</Th>
                                            <Th>Status</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td isNumeric fontSize="11.5px">
                                                <div className='ola'>
                                                    <img src={grply} alt='' />
                                                    <p>1</p>
                                                </div>
                                            </Td>
                                            <Td fontSize="11.5px">Prof</Td>
                                            <Td fontSize="11.5px">Majekodunmi</Td>
                                            <Td fontSize="11.5px">Oluwashanumi Majekodunmi</Td>
                                            <Td fontSize="11.5px">Shanumakanjuola31@gmail.com</Td>
                                            <Td fontSize="11.5px">Faculty of Agriculture</Td>
                                            <Td fontSize="11.5px">
                                                <div className='mini'>
                                                    <p>Enable</p>
                                                </div>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td isNumeric fontSize="11.5px">
                                                <div className='ola'>
                                                    <img src={rplay} alt='' />
                                                    <p>3</p>
                                                </div>
                                            </Td>
                                            <Td fontSize="11.5px">Prof</Td>
                                            <Td fontSize="11.5px">Majekodunmi</Td>
                                            <Td fontSize="11.5px">Oluwashanumi Majekodunmi</Td>
                                            <Td fontSize="11.5px">Shanumakanjuola31@gmail.com</Td>
                                            <Td fontSize="11.5px">Faculty of Agriculture</Td>
                                            <Td fontSize="11.5px">
                                                <div className='nimi'>
                                                    <p>Disable</p>
                                                </div>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td isNumeric fontSize="11.5px">
                                                <div className='ola'>
                                                    <img src={grply} alt='' />
                                                    <p>2</p>
                                                </div>
                                            </Td>
                                            <Td fontSize="11.5px">Prof</Td>
                                            <Td fontSize="11.5px">Majekodunmi</Td>
                                            <Td fontSize="11.5px">Oluwashanumi Majekodunmi</Td>
                                            <Td fontSize="11.5px">Shanumakanjuola31@gmail.com</Td>
                                            <Td fontSize="11.5px">Faculty of Agriculture</Td>
                                            <Td fontSize="11.5px">
                                                <div className='mini'>
                                                    <p>Enable</p>
                                                </div>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                    <Tfoot>
                                        <Menu>
                                            <MenuButton
                                                aria-label='Options'
                                                variant='outline'
                                            >
                                                <img src={menu} alt='' />
                                            </MenuButton>
                                            <MenuList>
                                                <Link to="/updateuser">
                                                    <MenuItem >
                                                        Update
                                                    </MenuItem>
                                                </Link>
                                                <MenuItem onClick={openModal}>
                                                    Disable
                                                   </MenuItem>
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="Disable Modal"
                                                        ariaHideApp={true}
                                                    >
                                                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>.</h2>
                                                        <img onClick={closeModal} src={close} alt='' className='usmg-img' />
                                                        <div className='usmg-box'>
                                                            <p className='usmg-p'>You are about to disable the following. <br />
                                                                Kindly enter your password to proceed</p>
                                                            <input type='text'
                                                                className='usmg-input'
                                                                required />
                                                            <button className='usmg-butt'>Proceed</button>
                                                        </div>
                                                    </Modal>
                                                <MenuItem onClick={openModal}>
                                                    Delete
                                                    </MenuItem>
                                                    <Modal
                                                        isOpen={modalIsOpen}
                                                        onAfterOpen={afterOpenModal}
                                                        onRequestClose={closeModal}
                                                        style={customStyles}
                                                        contentLabel="remove Modal"
                                                        ariaHideApp={true}
                                                    >
                                                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>.</h2>
                                                        <img onClick={closeModal} src={close} alt='' className='usmg-img' />
                                                        <div className='usmg-box'>
                                                            <p className='usmg-p'>You are about to remove the following. <br />
                                                                Kindly enter your password to proceed</p>
                                                            <input type='text'
                                                                className='usmg-input'
                                                                required />
                                                            <button className='usmg-butt'>Proceed</button>
                                                        </div>
                                                    </Modal>
                                            </MenuList>
                                        </Menu>
                                    </Tfoot>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserManage