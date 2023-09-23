import React, {useState} from 'react'
import "./styles.css"
import logo from "../../images/OAU-Logo-PNG 1.png"


function getUser(){
  let user = localStorage.getItem('user');
  if(user){
    user = JSON.parse(user);
  }
  else{
    user = null;
  }
  return user;
  }

const Navbar = () => {
  const [user, setUser] = useState(getUser())

  const handleLogout = () =>{
    localStorage.removeItem('user');
    setUser(null)
  }

  return (
    <div className='nav'>
        <div className='nav-container'>
            <div className='nav-content'>
            <div className='nav-left'>
                <img src={logo} alt='' className='nav-logo'/>
                <p className='nav-p'>Obafemi Awolowo University<br />
                            Admission portal</p>
            </div>
            {user? (
            <div className='nav-right'>
                <p className='nr-p'>Welcome {user.first_name},</p>
                <p className='nr-p1' onClick={handleLogout}>Sign Out</p>
            </div>
             ):(
              <p>No Information</p>
            )}
            </div>
        </div>
    </div>
  )
}

export default Navbar