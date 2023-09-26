import React, {useState} from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Select } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { getCourse, deleteCourse } from '../../redux/CourseSlice'
import { useNavigate } from 'react-router-dom';
import { addCourse } from '../../redux/CourseSlice'

const Addprogram = () => {
    const [prog, setProg] = useState({
        facculty: '',
        course: '',
        subject_1: '',
        subject_2: '',
        subject_3: '',
        subject_4: '',
        subject_5: '',
        subject_6: '',
        subject_7: '',
        subject_8: ''
      });

      const dispatch  = useDispatch();
const navigate = useNavigate();
      const [error, setError] = useState('');
      const handleChange = ({ currentTarget: input }) => {
        setError('');
        setProg({ ...prog, [input.name]: input.value });
      };
      const add_program = async () => {
        let course = {
          course: prog,
        }
        console.log(course);
        await dispatch(addCourse(course)); // Dispatch addFaculty instead of getFaculty
        await dispatch(getCourse()); // Optionally, you can re-fetch the faculty list after adding a new one
        navigate('/plview');
      }


    return (
        <div className='adp'>
            <Navbar />
            <div className='adp-container'>
                <Sidebar />
                <div className='adp-content'>
                    <div className='adp-contain'>
                        <h2 className='ads-h2'>Add Program</h2>
                        <div className='adprg-up'>
                            <div className='ads-1'>
                                <label>Faculty:</label>
                                <input type='text'
                                    required
                                    name="faculty"
                                    value={prog.faculty}
                                    onChange={handleChange}
                                    className='adprg-input' />
                            </div>
                            <div className='ads-1'>
                                <label>Program:</label>
                                <input type='text'
                                    required
                                    name="course"
                                    value={prog.course}
                                    onChange={handleChange}
                                    className='adprg-input' />
                            </div>
                        </div>
                        <p className='adprg-pp'>Subject Combination:</p>
                        <div className='adprg-down'>
                            <div className='adprg-1'>
                                <div>
                                    <label>1</label>
                                    <Select placeholder='Select option' size='md'
                                        bg='white'
                                        borderColor='white'
                                        color='black'
                                        width="400px"
                                        name="subject_1"
                                        value={prog.subject_1}
                                        onChange={handleChange}
                                    >
                                        <option value='Mathematics'>Mathematics</option>
                                        <option value='English'>English</option>
                                        <option value='Biology'>Biology</option>
                                        <option value='Physics'>Physics</option>
                                        <option value='Chemistry'>Chemistry</option>
                                        <option value='Agriculture'>Agriculture</option>
                                        <option value='Literature-in-english'>Literature-in-english</option>
                                        <option value='Goverment'>Goverment</option>
                                        <option value='Accounting'>Accounting</option>
                                        <option value='Civic Education'>Civic Education</option>
                                        <option value='Commerce'>Commerce</option>
                                        <option value='Christian Religion Studies'>Christian Religion Studies</option>
                                        <option value='Yoruba'>Yoruba</option>
                                        <option value='Food and Nutrition'>Food and Nutrition</option>
                                        <option value='Further Mathematics'>Further Mathematics</option>
                                        <option value='Technical Drawing'>Technical Drawing</option>
                                        <option value='Geography'>Geography</option>
                                        <option value='Marketing'>Marketing</option>
                                    </Select>
                                </div>
                                <div>
                                    <label>2</label>
                                    <Select placeholder='Select option' size='md'
                                        bg='white'
                                        borderColor='white'
                                        color='black'
                                        width="400px"
                                        name="subject_2"
                                        value={prog.subject_2}
                                        onChange={handleChange}
                                    >
                                        <option value='Mathematics'>Mathematics</option>
                                        <option value='English'>English</option>
                                        <option value='Biology'>Biology</option>
                                        <option value='Physics'>Physics</option>
                                        <option value='Chemistry'>Chemistry</option>
                                        <option value='Agriculture'>Agriculture</option>
                                        <option value='Literature-in-english'>Literature-in-english</option>
                                        <option value='Goverment'>Goverment</option>
                                        <option value='Accounting'>Accounting</option>
                                        <option value='Civic Education'>Civic Education</option>
                                        <option value='Commerce'>Commerce</option>
                                        <option value='Christian Religion Studies'>Christian Religion Studies</option>
                                        <option value='Yoruba'>Yoruba</option>
                                        <option value='Food and Nutrition'>Food and Nutrition</option>
                                        <option value='Further Mathematics'>Further Mathematics</option>
                                        <option value='Technical Drawing'>Technical Drawing</option>
                                        <option value='Geography'>Geography</option>
                                        <option value='Marketing'>Marketing</option>
                                    </Select>
                                </div>

                            </div>
                            <div className='adprg-2'>
                                <div>
                                    <label>3</label>
                                    <Select placeholder='Select option' size='md'
                                        bg='white'
                                        borderColor='white'
                                        color='black'
                                        width="400px"
                                        name="subject_3"
                                        value={prog.subject_3}
                                        onChange={handleChange}
                                    >
                                       <option value='Mathematics'>Mathematics</option>
                                        <option value='English'>English</option>
                                        <option value='Biology'>Biology</option>
                                        <option value='Physics'>Physics</option>
                                        <option value='Chemistry'>Chemistry</option>
                                        <option value='Agriculture'>Agriculture</option>
                                        <option value='Literature-in-english'>Literature-in-english</option>
                                        <option value='Goverment'>Goverment</option>
                                        <option value='Accounting'>Accounting</option>
                                        <option value='Civic Education'>Civic Education</option>
                                        <option value='Commerce'>Commerce</option>
                                        <option value='Christian Religion Studies'>Christian Religion Studies</option>
                                        <option value='Yoruba'>Yoruba</option>
                                        <option value='Food and Nutrition'>Food and Nutrition</option>
                                        <option value='Further Mathematics'>Further Mathematics</option>
                                        <option value='Technical Drawing'>Technical Drawing</option>
                                        <option value='Geography'>Geography</option>
                                        <option value='Marketing'>Marketing</option>
                                    </Select>
                                </div>
                                <div>
                                    <label>4</label>
                                    <Select placeholder='Select option' size='md'
                                        bg='white'
                                        borderColor='white'
                                        color='black'
                                        width="400px"
                                        name="subject_4"
                                        value={prog.subject_4}
                                        onChange={handleChange}
                                    >
                                        <option value='Mathematics'>Mathematics</option>
                                        <option value='English'>English</option>
                                        <option value='Biology'>Biology</option>
                                        <option value='Physics'>Physics</option>
                                        <option value='Chemistry'>Chemistry</option>
                                        <option value='Agriculture'>Agriculture</option>
                                        <option value='Literature-in-english'>Literature-in-english</option>
                                        <option value='Goverment'>Goverment</option>
                                        <option value='Accounting'>Accounting</option>
                                        <option value='Civic Education'>Civic Education</option>
                                        <option value='Commerce'>Commerce</option>
                                        <option value='Christian Religion Studies'>Christian Religion Studies</option>
                                        <option value='Yoruba'>Yoruba</option>
                                        <option value='Food and Nutrition'>Food and Nutrition</option>
                                        <option value='Further Mathematics'>Further Mathematics</option>
                                        <option value='Technical Drawing'>Technical Drawing</option>
                                        <option value='Geography'>Geography</option>
                                        <option value='Marketing'>Marketing</option>
                                    </Select>
                                </div>

                            </div>
                            <div className='adprg-3'>  <div>
                                <label>5</label>
                                <Select placeholder='Select option' size='md'
                                    bg='white'
                                    borderColor='white'
                                    color='black'
                                    width="400px"
                                    name="subject_5"
                                        value={prog.subject_5}
                                        onChange={handleChange}
                                >
                                   <option value='Mathematics'>Mathematics</option>
                                        <option value='English'>English</option>
                                        <option value='Biology'>Biology</option>
                                        <option value='Physics'>Physics</option>
                                        <option value='Chemistry'>Chemistry</option>
                                        <option value='Agriculture'>Agriculture</option>
                                        <option value='Literature-in-english'>Literature-in-english</option>
                                        <option value='Goverment'>Goverment</option>
                                        <option value='Accounting'>Accounting</option>
                                        <option value='Civic Education'>Civic Education</option>
                                        <option value='Commerce'>Commerce</option>
                                        <option value='Christian Religion Studies'>Christian Religion Studies</option>
                                        <option value='Yoruba'>Yoruba</option>
                                        <option value='Food and Nutrition'>Food and Nutrition</option>
                                        <option value='Further Mathematics'>Further Mathematics</option>
                                        <option value='Technical Drawing'>Technical Drawing</option>
                                        <option value='Geography'>Geography</option>
                                        <option value='Marketing'>Marketing</option>
                                </Select>
                            </div>
                                <div>
                                    <label>6</label>
                                    <Select placeholder='Select option' size='md'
                                        bg='white'
                                        borderColor='white'
                                        color='black'
                                        width="400px"
                                        name="subject_6"
                                        value={prog.subject_6}
                                        onChange={handleChange}
                                    >
                                        <option value='Mathematics'>Mathematics</option>
                                        <option value='English'>English</option>
                                        <option value='Biology'>Biology</option>
                                        <option value='Physics'>Physics</option>
                                        <option value='Chemistry'>Chemistry</option>
                                        <option value='Agriculture'>Agriculture</option>
                                        <option value='Literature-in-english'>Literature-in-english</option>
                                        <option value='Goverment'>Goverment</option>
                                        <option value='Accounting'>Accounting</option>
                                        <option value='Civic Education'>Civic Education</option>
                                        <option value='Commerce'>Commerce</option>
                                        <option value='Christian Religion Studies'>Christian Religion Studies</option>
                                        <option value='Yoruba'>Yoruba</option>
                                        <option value='Food and Nutrition'>Food and Nutrition</option>
                                        <option value='Further Mathematics'>Further Mathematics</option>
                                        <option value='Technical Drawing'>Technical Drawing</option>
                                        <option value='Geography'>Geography</option>
                                        <option value='Marketing'>Marketing</option>
                                    </Select>
                                </div>
                            </div>
                            <div className='adprg-4'>
                                <div>
                                    <label>7</label>
                                    <Select placeholder='Select option' size='md'
                                        bg='white'
                                        borderColor='white'
                                        color='black'
                                        width="400px"
                                        name="subject_7"
                                        value={prog.subject_7}
                                        onChange={handleChange}
                                    >
                                       <option value='Mathematics'>Mathematics</option>
                                        <option value='English'>English</option>
                                        <option value='Biology'>Biology</option>
                                        <option value='Physics'>Physics</option>
                                        <option value='Chemistry'>Chemistry</option>
                                        <option value='Agriculture'>Agriculture</option>
                                        <option value='Literature-in-english'>Literature-in-english</option>
                                        <option value='Goverment'>Goverment</option>
                                        <option value='Accounting'>Accounting</option>
                                        <option value='Civic Education'>Civic Education</option>
                                        <option value='Commerce'>Commerce</option>
                                        <option value='Christian Religion Studies'>Christian Religion Studies</option>
                                        <option value='Yoruba'>Yoruba</option>
                                        <option value='Food and Nutrition'>Food and Nutrition</option>
                                        <option value='Further Mathematics'>Further Mathematics</option>
                                        <option value='Technical Drawing'>Technical Drawing</option>
                                        <option value='Geography'>Geography</option>
                                        <option value='Marketing'>Marketing</option>
                                    </Select>
                                </div>
                                <div>
                                    <label>8</label>
                                    <Select placeholder='Select option' size='md'
                                        bg='white'
                                        borderColor='white'
                                        color='black'
                                        width="400px"
                                        name="subject_8"
                                        value={prog.subject_8}
                                        onChange={handleChange}
                                    >
                                        <option value='Mathematics'>Mathematics</option>
                                        <option value='English'>English</option>
                                        <option value='Biology'>Biology</option>
                                        <option value='Physics'>Physics</option>
                                        <option value='Chemistry'>Chemistry</option>
                                        <option value='Agriculture'>Agriculture</option>
                                        <option value='Literature-in-english'>Literature-in-english</option>
                                        <option value='Goverment'>Goverment</option>
                                        <option value='Accounting'>Accounting</option>
                                        <option value='Civic Education'>Civic Education</option>
                                        <option value='Commerce'>Commerce</option>
                                        <option value='Christian Religion Studies'>Christian Religion Studies</option>
                                        <option value='Yoruba'>Yoruba</option>
                                        <option value='Food and Nutrition'>Food and Nutrition</option>
                                        <option value='Further Mathematics'>Further Mathematics</option>
                                        <option value='Technical Drawing'>Technical Drawing</option>
                                        <option value='Geography'>Geography</option>
                                        <option value='Marketing'>Marketing</option>
                                    </Select>
                                </div>

                            </div>
                        </div>
                        <button className='adprg-but'
                         onClick ={()=>add_program()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addprogram