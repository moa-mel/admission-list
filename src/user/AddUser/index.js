import React, {useState} from 'react'
import "./styles.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom';
import { Select } from '@chakra-ui/react'
import GB from "../../images/Go back.png"
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/UserSlice';
import { useToast } from "@chakra-ui/react";

const AddUser = () => {
  const navigate = useNavigate()
  const  toast = useToast();
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [middle_name, setMiddle_name] = useState('')
  const [phone_1, setPhone_1] = useState('')
  const [phone_2, setPhone_2] = useState('')
  const [account_type, setAccount_type] = useState('')

  const dispatch = useDispatch();
  const handleAddUsers=(e)=>{
    e.preventDefault();
    let userCredentials={
      title, email, first_name, last_name, middle_name, phone_1, phone_2, account_type
    }
    dispatch(registerUser(userCredentials)).then((result)=>{
      toast({
        title: 'Success',
        description:'User registered and added successfully' ,
        position:"top-right",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    if(result.payload){
      setTitle('')
      setEmail(' ');
      setFirst_name(' ')
      setLast_name(' ')
      setMiddle_name(' ')
      setPhone_1(' ')
      setPhone_2(' ')
      setAccount_type(' ')
      navigate('/usermanagement')
    }
    })
    .catch((err) =>  toast({
      title: 'Error',
      description:err.response.data.message ,
      position:"top-right",
      status: 'error',
      duration: 9000,
      isClosable: true,
    }));
  }

  return (
    <div className='ads'>
      <Navbar />
      <div className='ads-container'>
        <Sidebar />
        <div className='ads-content'>
          <div className='ads-contain'>
            <h2 className='ads-h2'>Add User</h2>
            <label>Title</label>
          <Select placeholder='Select title' size='md'
            name="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            marginLeft='25px'
            bg='white'
            borderColor='#000'
            color='black'
            width="335px"
          >
            <option value='option1'>Prof</option>
            <option value='option2'>Dr</option>
            <option value='option3'>Mr</option>
            <option value='option3'>Mrs</option>
            <option value='option3'>Miss</option>

          </Select>
          <label>First Name</label>
          <input
            className="reg-input-text"
            name="first_name"
            type="text"
            value={first_name}
            onChange={(e)=>setFirst_name(e.target.value)}
          />
          <label>Last Name</label>
          <input
            className="reg-input-text"
            name="last_name"
            type="text"
            value={last_name}
            onChange={(e)=>setLast_name(e.target.value)}
          />
          <label>Middle Name</label>
          <input
            className="reg-input-text"
            name="middle_name"
            type="text"
            value={middle_name}
            onChange={(e)=>setMiddle_name(e.target.value)}
          />
          <label>Staff ID</label>
          <input
            className="reg-input-text"
            name="email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label>Phone Number1</label>
          <input
            className="reg-input-text"
            name="phone_1"
            type="number"
            value={phone_1}
            onChange={(e)=>setPhone_1(e.target.value)}
          />
          <label>Phone Number2</label>
          <input
            className="reg-input-text"
            name="phone_2"
            type="number"
            value={phone_2}
            onChange={(e)=>setPhone_2(e.target.value)}
          />
          <label>Account Type</label>
          <Select placeholder='Select type' size='md'
            name="account_type"
            value={account_type}
            onChange={(e)=>setAccount_type(e.target.value)}
            marginLeft='25px'
            bg='white'
            borderColor='#000'
            color='black'
            width="335px">
            <option value='option1'>Admin</option>
            <option value='option2'>Dean</option>
          </Select>
            <button className='ads-but'
            onClick={handleAddUsers}>Add</button>
            <img src={GB} alt='' className='ads-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser