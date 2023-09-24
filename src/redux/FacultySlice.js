import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from "axios";
import {remote_url} from '../config' 


  
export const getFaculty = createAsyncThunk(
    'faculties/getFaculty',
    async (faculty, { dispatch }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);

      const { old_subject_code, new_subject_code, subject } = faculty

      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/faculty/list?pagination=50`, {
          params: {
            pagination: 50,
            old_subject_code,
            new_subject_code,
            subject,
          },
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        
              
        // Assuming the response contains the data you need
        const data = response.data;
        return data;
      } catch (error) {
        // Log the detailed error information
        console.error('Error fetching faculty:', error);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        // If the error object has a response property, it means the server has responded with an error status code.
        if (error.response) {
          console.error('Server Response:', error.response);
          console.error('Response Status:', error.response.status);
          console.error('Response Data:', error.response.data);
        }
        
        throw error;
      }
      
    }
  );
  
  

  export const addFaculty = createAsyncThunk(
    'faculties/addFaculty',
    async (faculty, { dispatch, rejectWithValue }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
    
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(faculty)
      };
      
      try {
        const response = await fetch(`${remote_url}/api/v1/superadmin/faculty/add`, requestOptions);
        
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          console.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
        
        const data = await response.json();
  
        // After successfully adding the faculty, dispatch getFaculty to update the faculties list in the state.
        dispatch(getFaculty());
        
        return data;
        
      } catch (error) {
        console.error('Error adding faculty:', error);
        return rejectWithValue(error.toString());
      }
    }
  );  
  export const updateFaculty = createAsyncThunk(
    'faculties/updateFaculty',
    async (faculty, { dispatch }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);

      const requestOptions = {
          method: 'POST',
          headers: { 
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json' },
          body: JSON.stringify(faculty)
      };
      const response =  await fetch(`${remote_url}/api/v1/superadmin/faculty/edit`,requestOptions).then(
          (data) => data.json()
      )
      const finalPayload = response
      return finalPayload;
     }
  )

  export const deleteFaculty = createAsyncThunk(
    'faculties/deleteFaculty',
    async (faculty, { dispatch }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      const requestOptions = {
          method: 'DELETE',
          headers: { 
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json' },
          body: JSON.stringify(faculty)
      };
      const response =  await fetch(`${remote_url}/api/v1/superadmin/faculty/delete`,requestOptions).then(
          (data) => data.json()
      )
      const finalPayload = response
      return finalPayload;
     }
  )

  const initialState = {
    loading:false,
    faculties:[],
    isFetchFacultyID:false,
    faculty:{},
    currentPage: 1, 
  };
  export const facultySlice = createSlice({
    name: 'faculties',
    initialState,
    reducers: {},
    extraReducers: {
        [getFaculty.pending]: (state) => {
            state.loading = true
          },
          [getFaculty.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.faculties = payload.faculties.data
            state.currentPage = payload.currentPage;
          },
                    [getFaculty.rejected]: (state) => {
            state.loading = false
          },
           
          //set post Product
          [addFaculty.fulfilled]: (state, { payload }) => {
            console.log('Payload from addFaculty:', payload);
            state.faculties.push(payload);
          },
              
          //set update Product
          [updateFaculty.fulfilled]:(state,{payload})=>{
            const index = state.faculties.findIndex(faculty => faculty.id === payload.id);
            //console.log(index)
           // console.log(payload)
            state.faculties[index] = payload;
          },
     
           //set delete Product
           [deleteFaculty.fulfilled]:(state,{payload})=>{
            const index = state.faculties.findIndex(faculty => faculty.id === payload.id);
            state.faculties.splice(index, 1);
          }
    }
  })


  export default facultySlice.reducer;