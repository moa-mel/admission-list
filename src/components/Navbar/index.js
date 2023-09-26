import React, {useEffect} from 'react'
import "./styles.css"
import logo from "../../images/OAU-Logo-PNG 1.png"
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/UserSlice';



const Navbar = () => {
 
  


  return (
    <div className='nav'>
        <div className='nav-container'>
            <div className='nav-content'>
            <div className='nav-left'>
                <img src={logo} alt='' className='nav-logo'/>
                <p className='nav-p'>Obafemi Awolowo University<br />
                            Admission portal</p>
            </div>
           
            <div className='nav-right' >
                <p className='nr-p'>Welcome </p>
                <p className='nr-p1' >Sign Out</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar