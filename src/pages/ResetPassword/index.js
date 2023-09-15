import React, { useState, useEffect } from 'react'
import './styles.css'
import Modal from 'react-modal';
import logo from "../../images/OAU-Logo-PNG 1.png"
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

const ResetPassword = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // If isLoading is true, set a timeout to close the modal after 10 seconds
      const timeoutId = setTimeout(() => {
        closeModal();
        // Navigate to the next page here
        navigate('/login'); // Replace '/next-page' with the actual URL of the next page
      }, 10000); // 10 seconds
      return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    }
  }, [isLoading, navigate]);

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
    event.preventDefault();
    setIsLoading(true); // Start loading when the form is submitted
    openModal(); // Open the modal
  }

  return (
    <div className='resetpassword'>
      <div className='rp-container'>
        <form className='rp-form' onSubmit={handleFormSubmit}>
        <img src={logo} alt='logo' className='rp-logo' />
        <h3 className='rp-h3'>Create New Password</h3>
        <p className='rp-p'>Enter a new password different from your previously <a href='!#' className='rp-a'>used passwords.</a></p>
        <label>New Password</label>
        <input
          className="rp-input-text"
          name="newPassword"
          type="password"
        />
        <label>Confirm New Password</label>
        <input
          className="rp-input-text"
          name="confirmNewPassword"
          type="password"
        />
        <div className='rp-but'>         
          <button className="rp-button" type='submit"'>
            Reset Password
          </button>
        </div>
        <br/>
        <br/>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>.</h2>
            <button onClick={closeModal}>.</button>
           {isLoading && <div className='md-succ'>
                            <img src={succ} alt='' className='vs-img' />
                            <h2> Password Reset Successful! </h2>
                        </div> }
          </Modal>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword