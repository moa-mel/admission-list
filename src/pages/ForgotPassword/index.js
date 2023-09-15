import React from 'react'
import "./styles.css"
import logo from "../../images/OAU-Logo-PNG 1.png"
import arrow from "../../images/tdesign_arrow-up.png"
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className='forgotpassword'>
            <div className='fp-container'>
                <form className='fp-form'>
                    <img src={logo} alt='logo' className='fp-logo' />
                    <h3 className='fp-h3'>Forgot Password?</h3>
                    <p className='fp-p'>we will send reset instructions to your e-mail</p>
                    <label>E-mail</label>
                    <input
                        placeholder='Enter your e-mail'
                        className="fp-input-text"
                        name="email"
                        type="email"
                    />
                    <div className='fpp-but'>
                        <Link to='/resetemail'>
                        <button className="fpp-button" type='submit"'>
                            Send Instructions
                        </button>
                        </Link>
                    </div>
                    <div className='fp-down'>
                        <img src={arrow} alt='arrow' className='fp-img' />
                        <p className='fpd-p'>Back to log in</p>
                    </div>
                    <br/>
                    <br/>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword