import React from 'react'
import "./styles.css"
import logo from "../../images/OAU-Logo-PNG 1.png"
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
        <div className='reg-container'>
            <form className='reg-form'>
            <img src={logo} alt='logo'className='reg-logo'/>
            <p className='reg-p'>Create New Account</p>
            <label>Full Name</label>
              <input
                className="reg-input-text"
                name="fullName"
                type="text"
              />
            <label>Staff ID</label>
              <input
                className="reg-input-text"
                name="email"
                type="email"
              />
              <label>Password</label>
              <input
                name="password"
                className="reg-input-text"
                type="password"
              />
              <label> Confirm password</label>
              <input
                name="password"
                className="reg-input-text"
                type="password"
              />
              <div className='reg-but'>
                <Link to='/verify'>
              <button className="reg-button" type='submit"'>
                Sign Up
              </button>
              </Link>
              </div>
              <br/>
              <br/>
            </form>
        </div>
    </div>
  )
}

export default Register