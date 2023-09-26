import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {remote_url} from '../config' 


  
export const getSubject = createAsyncThunk(
    'subjects/getSubject',
    async (old_subject_code, new_subject_code, subject,) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);

      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/subject/list?pagination=50`, {
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
  
  

  export const addSubject = createAsyncThunk(
    'subjects/addSubject',
    async (subject, subject_code, { dispatch, rejectWithValue }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
    
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subject, subject_code)
      };
      
      try {
        const response = await fetch(`${remote_url}/api/v1/superadmin/subject/add`, requestOptions);
        
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          console.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
        
        const data = await response.json();
  
        // After successfully adding the faculty, dispatch getFaculty to update the faculties list in the state.
        dispatch(getSubject());
        
        return data;
        
      } catch (error) {
        console.error('Error adding faculty:', error);
        return rejectWithValue(error.toString());
      }
    }
  ); 
  
  
  export const updateSubject = createAsyncThunk(
    'subjects/updateSubject',
    async (old_subject_code, new_subject_code, subject,) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.post(`${remote_url}/api/v1/superadmin/subject/edit`, {
          params: {
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
        console.error('Error editing subject:', error);
      }
     }
  )

  export const deleteSubject = createAsyncThunk(
    'subjects/deleteSubject',
    async (subject_code) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.delete(`${remote_url}/api/v1/superadmin/subject/delete`, {
          params: {
            subject_code,
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
        console.error('Error deleting subject:', error);
      }
     } 
  )

  const initialState = {
    loading:false,
    subjects:[],
    isFetchSubjectID:false,
    subject:{},
    currentPage: 1, 
  };
  export const subjectSlice = createSlice({
    name: 'subjects',
    initialState,
    reducers: {},
    extraReducers: {
        [getSubject.pending]: (state) => {
            state.loading = true
          },
          [getSubject.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.subjects = payload.subjects.data
            state.currentPage = payload.currentPage;
          },
                    [getSubject.rejected]: (state) => {
            state.loading = false
          },
           
          //set post Product
          [addSubject.fulfilled]: (state, { payload }) => {
            console.log('Payload from addSubject:', payload);
            state.subjects.push(payload);
          },
              
          //set update Product
          [updateSubject.fulfilled]:(state,{payload})=>{
            const index = state.subjects.findIndex(subject => subject.id === payload.id);
            state.subjects[index] = payload;
          },
     
           //set delete Product
           [deleteSubject.fulfilled]:(state,{payload})=>{
            const index = state.subjects.findIndex(subject => subject.id === payload.id);
            state.subjects.splice(index, 1);
          }
    }
  })


  export default subjectSlice.reducer;