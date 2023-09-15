import React from 'react'
import "./styles.css"
import mdi from "../../images/mdi_email-check.png"
import { useNavigate } from 'react-router-dom';

const ResetEmail = () => {
    const navigate = useNavigate();

    setTimeout(() =>
        navigate("/resetpassword"
        ), 2000);

    return (
        <div className='resetemail'>
            <div className='re-container'>
                <div className='re-div'>
                    <div className='rei-contain'>
                        <img src={mdi} alt='mdi' className='re-img' />
                    </div>
                    <h3 className='re-h3'> Kindly Check your mail</h3>
                    <p className='re-p'> We sent you a password recovery instructions to <br />
                        <a href='!#' className='re-p-a'>your e-mail.</a></p>
                    <div className="re-down">
                        <p className='red-p'>Didn’t receive mail? Please check through your spam
                            or <a href='!#' className='red-a'>try another email</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetEmail