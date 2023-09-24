import React, {useEffect} from 'react'
import "./styles.css"
import logo from "../../images/OAU-Logo-PNG 1.png"
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/UserSlice';



const Navbar = () => {
 
  const dispatch = useDispatch();
    const { user: userArray, loading } = useSelector(state => state.user);
    let fetchMount = true;

    useEffect(() => {
        if(fetchMount){
            dispatch(getUser())
            console.log('Dispatched getUser');
        }
        return ()=>{
            fetchMount = false;
        }
    }, [])


  return (
    <div className='nav'>
        <div className='nav-container'>
            <div className='nav-content'>
            <div className='nav-left'>
                <img src={logo} alt='' className='nav-logo'/>
                <p className='nav-p'>Obafemi Awolowo University<br />
                            Admission portal</p>
            </div>
            {Array.isArray(userArray) && userArray.map((user, i) => (
            <div className='nav-right' key={i}>
                <p className='nr-p'>Welcome {user.user.first_name},</p>
                <p className='nr-p1' >Sign Out</p>
            </div>
             ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar