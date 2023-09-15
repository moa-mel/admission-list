import React from 'react'
import "./styles.css"
import logo from "../../images/OAU-Logo-PNG 1.png"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <div className='log-container'>
               <form className='log-form'>
                 <img src={logo} alt='logo'className='log-logo'/>
                 <div className='log-top'>
                    <p className='lt-p'>Do yo have an account</p>
                    <Link to='/register' className='lt-p1'>
                    Create New Account
                    </Link>
                 </div>
                 <label>Staff ID</label>
              <input
                className="login-input-text"
                name="email"
                type="email"
              />
              <label>Password</label>
              <input
                name="password"
                className="login-input-text"
                type="password"
              />
              <Link to='/forgotpassword'>
              <p className='ld-p'>Forgot password?</p>
              </Link>
              <div className='log-but'>
                <Link to='/profile'>
              <button className="login-button" type='submit"'>
                Log In
              </button>
              </Link>
              </div>
              <br/>
               </form>
            </div>
        </div>
    )
}

export default Login