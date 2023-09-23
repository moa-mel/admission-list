import React, {useState} from 'react'
import "./styles.css"
import logo from "../../images/OAU-Logo-PNG 1.png"
import { Link, useNavigate } from 'react-router-dom';
import { eye } from "react-icons-kit/feather/eye"
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { Icon } from 'react-icons-kit';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/UserSlice';
import { useToast } from "@chakra-ui/react";


const Login = () => {
  const navigate = useNavigate()
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('');

  

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }
  const dispatch = useDispatch();
  const handleLoginEvent=(e)=>{
    e.preventDefault();
    let userCredentials={
      email, password
    }
    dispatch(loginUser(userCredentials)).then((result)=>{
      if(result.payload){
        setEmail(' ');
        setPassword(' ');
        navigate('/profile')
      }
    })

  }
    

    return (
        <div className='login'>
            <div className='log-container'>
               <form className='log-form' onSubmit={handleLoginEvent}>
                 <img src={logo} alt='logo'className='log-logo'/>
                 
                 <label>Staff ID</label>
              <input
                className="login-input-text"
                name="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <label>Password</label>
              <div className='log-pass'>
              <input
                name="password"
                className="login-input"
                type={type}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <span onClick={handleToggle}>
              <Icon className="absolute mr-10" icon={icon} size={18} />
            </span>
              </div>
              <Link to='/forgotpassword'>
              <p className='ld-p'>Forgot password?</p>
              </Link>
              <div className='log-but'>
              <button className="login-button" type='submit"'>
                Log In
              </button>
              </div>
              <br/>
               </form>
            </div>
        </div>
    )
}

export default Login