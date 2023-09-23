import React, { useEffect, useState } from 'react'
import './styles.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate  } from 'react-router-dom';
import { updateFaculty } from '../../redux/FacultySlice'

const UpdateFaculty = () => {
    const {facultyId} = useParams();
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const {faculties,loading} = useSelector((state)=>state.faculties)
    const [facut, setFacut] = useState("");
    useEffect(()=>{
        faculties.map(item=>{
            if(item.faculty_id === facultyId){
                setFacut(item.facutlty)
            }
        })
      },[loading])

      const update_faculty = async ()=>{
        let faculty = {
           faculty_id:facultyId,
           faculty:facut,
        }
        console.log(faculty)
        //dispatch action postUpdateProduct từ createAsyncThunk
       await dispatch(updateFaculty(faculty))
       navigate(`/faculties/${facultyId}`);
     }
     if(loading) return <div>Loading...!</div>

  return (
    <div>
         <Navbar />
            <div className='uf-container'>
                <Sidebar />
                <div className='uf-content'>
                    <div className='uf-contain'>
                        <h2 className='uf-h2'>Update Faculty</h2>
                    <div className='uf-div'>
              <p className='uf-p'> Faculty:  </p>
              <input type='text'
              name='faculty'
              onChange={(e)=>setFacut(e.target.value)}
                className='uf-input' />
            </div>
            <button className='uf-butt'
            onClick ={()=>update_faculty()}
            >Update</button>
                    </div>
                    </div>
                    </div>
    </div>
  )
}

export default UpdateFaculty