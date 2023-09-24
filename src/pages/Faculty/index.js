import React, {useState} from 'react'
import './styles.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getFaculty, addFaculty } from '../../redux/FacultySlice'

const Faculty = () => {
    const dispatch  = useDispatch();
  const navigate = useNavigate();
  const [facut, setFacut] = useState("");

  const add_faculty = async () => {
    let faculty = {
      faculty: facut,
    }
    console.log(faculty);
    await dispatch(addFaculty(faculty)); // Dispatch addFaculty instead of getFaculty
    await dispatch(getFaculty()); // Optionally, you can re-fetch the faculty list after adding a new one
    navigate('/viewfaculty');
  }
  

  return (
    <div className='faculty'>
         <Navbar />
            <div className='faculty-container'>
                <Sidebar />
                <div className='faculty-content'>
                    <div className='faculty-contain'>
                        <h2 className='fac-h2'>Add Faculty</h2>
                    <div className='fac-div'>
              <p className='facu-p'> Faculty:  </p>
              <input type='text'
              name='faculty'
              
              onChange={(e)=>setFacut(e.target.value)}
                className='facu-input' />
            </div>
            <button className='facu-butt'
            onClick ={()=>add_faculty()}
            >Add</button>
                    </div>
                    </div>
                    </div>
    </div>
  )
}

export default Faculty