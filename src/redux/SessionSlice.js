import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {remote_url} from '../config' 


  
export const getSession = createAsyncThunk(
    'sessions/getSession',
    async (session, { dispatch }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);

      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/session/get/all`, {
          params: {
            pagination: 50,
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
  
  

  export const addSession = createAsyncThunk(
    'faculties/addFaculty',
    async (session, { dispatch, rejectWithValue }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
    
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(session)
      };
      
      try {
        const response = await fetch(`${remote_url}/api/v1/superadmin/session/set`, requestOptions);
        
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          console.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
        
        const data = await response.json();
  
        // After successfully adding the faculty, dispatch getFaculty to update the faculties list in the state.
        dispatch(getSession());
        
        return data;
        
      } catch (error) {
        console.error('Error adding session:', error);
        return rejectWithValue(error.toString());
      }
    }
  );  
  export const activeSession = createAsyncThunk(
    'sessions/updateSession',
    async (session) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.post(`${remote_url}/api/v1/superadmin/faculty/edit`, {
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
        console.error('Error activating session:', error);
      }
     }
  )



  const initialState = {
    loading:false,
    sessions:[],
    isFetchSessionID:false,
    session:{},
    currentPage: 1, 
  };
  export const sessionSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {},
    extraReducers: {
        [getSession.pending]: (state) => {
            state.loading = true
          },
          [getSession.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.sessionss = payload.sessions.data
            state.currentPage = payload.currentPage;
          },
                    [getSession.rejected]: (state) => {
            state.loading = false
          },
           
          //set post Product
          [addSession.fulfilled]: (state, { payload }) => {
            console.log('Payload from addFaculty:', payload);
            state.sessions.push(payload);
          },
              
          //set update Product
          [activeSession.fulfilled]:(state,{payload})=>{
            const index = state.sessions.findIndex(session => session.id === payload.id);
            state.sessions[index] = payload;
          },
     
    }
  })


  export default sessionSlice.reducer;