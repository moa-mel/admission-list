import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import './styles.css';
import logo from '../../images/OAU-Logo-PNG 1.png';
import arrow from '../../images/tdesign_arrow-up.png';
import { Spinner } from '@chakra-ui/react'
import close from "../../images/ic_baseline-cancel.png"
import { useNavigate } from 'react-router-dom';
import succ from "../../images/ic_sharp-verified.png"

const customStyles = {
    content: {
        top: '50%',
        border: '1px solid #fff',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');

const Verify = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isLoading) {
            // If isLoading is true, set a timeout to simulate loading
            const loadingTimeout = setTimeout(() => {
                setIsLoading(false);
                setIsSuccess(true); // Set isSuccess to true to show the success modal
            }, 2000); // Simulate loading for 5 seconds (you can adjust the time as needed)
            return () => clearTimeout(loadingTimeout); // Clear the timeout if the component unmounts
        }
    }, [isLoading]);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
       subtitle.style.color = '#fff';
    }

    function closeModal() {
        setIsOpen(false);
    }
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        setIsLoading(true);
        openModal(); // Open the modal when the form is submitted
    }
    function closeSuccessModal() {
        setIsSuccess(false);
        // Navigate to the next page here
        navigate('/profile'); // Replace '/next-page' with the actual URL of the next page
    }

    return (
        <div className="verify">
            <div className="v-container">
                <form className="v-form" onSubmit={handleFormSubmit} >
                    <img src={logo} alt="logo" className="vlogo" />
                    <h3 className="v-h3">E-mail Verification</h3>
                    <p className="v-p">We sent a 5-digit code to verify your email</p>
                    <div className="ver-inp">
                        {/* Your input fields here */}
                        <input
                            className="v-input"
                            type="text"
                            maxLength="1"
                        />
                        <input
                            className="v-input"
                            type="text"
                            maxLength="1"
                        />
                        <input
                            className="v-input"
                            type="text"
                            maxLength="1"
                        />
                        <input
                            className="v-input"
                            type="text"
                            maxLength="1"
                        />
                        <input
                            className="v-input"
                            type="text"
                            maxLength="1"
                        />
                    </div>
                    <div className="v-but">
                        <button className="v-butt" onClick={openModal}
                        >
                            Verify E-mail
                        </button>
                    </div>

                    <div className="v-down">
                        <img src={arrow} alt="" className="v-img" />
                        <p>Back to log in</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Loading Modal"
                        ariaHideApp={true}
                    >
                         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>.</h2>
                        {/* <img onClick={closeModal} src={close} alt='' className='md-img'/> */}
                        <div className='md-spin'>
                            <Spinner thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='purple.500'
                                size='xl' />
                            <p className='mdspin-p'>loading...</p>
                        </div>
                    </Modal>

                    <Modal
                         isOpen={isSuccess}
                         onRequestClose={closeSuccessModal}
                         style={customStyles}
                         contentLabel="Success Modal"
                         ariaHideApp={true}
                    >
                       <img onClick={closeSuccessModal} src={close} alt='' className='md-img'/>
                        <div className='md-succ'>
                            <img src={succ} alt='' className='vs-img' />
                            <h2> Verification Successful!</h2>
                        </div>
                    </Modal>

                </form>

            </div>
        </div>
    )
}

export default Verify