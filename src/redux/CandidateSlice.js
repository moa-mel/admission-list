import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {remote_url} from '../config';
  

  export const uploadCandidate = createAsyncThunk(
    'candidates/uploadCandidate',
    async (candidates_file, { dispatch, rejectWithValue }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
    
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(candidates_file)
      };
      
      try {
        const response = await fetch(`${remote_url}/api/v1/superadmin/candidate/upload`, requestOptions);
        
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          console.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
        
        const data = await response.json();
        
        return data;
        
      } catch (error) {
        console.error('Error uploading candidate:', error);
        return rejectWithValue(error.toString());
      }
    }
  );  
  

  export const deleteCandidate = createAsyncThunk(
    'candidates/deleteCandidate',
    async (session) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.delete(`${remote_url}/api/v1/superadmin/candidate/delete`, {
          params: {
            session,
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
        console.error('Error deleting candiadte:', error);
      }
     } 
  )

  const initialState = {
    loading:false,
    candidates:[],
    isFetchCandidateID:false,
    candidate:{},
    currentPage: 1, 
  };
  export const candidateSlice = createSlice({
    name: 'candidates',
    initialState,
    reducers: {},
    extraReducers: {
           
          //set upload candidates
          [uploadCandidate.fulfilled]: (state, { payload }) => {
            console.log('Payload from uploadCandidate:', payload);
            state.candidates.push(payload);
          },
     
           //set delete Product
           [deleteCandidate.fulfilled]:(state,{payload})=>{
            const index = state.candidates.findIndex(candidate => candidate.id === payload.id);
            state.candidates.splice(index, 1);
          }
    }
  })


  export default candidateSlice.reducer;