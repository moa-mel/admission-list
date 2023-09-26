import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {remote_url} from '../config' 


  
export const getElds = createAsyncThunk(
    'eldss/getElds',
    async () => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);

      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/elds/list`, {
          
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
        console.error('Error fetching elds:', error);
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
  
  

  export const addElds = createAsyncThunk(
    'eldss/addElds',
    async (state, { dispatch, rejectWithValue }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
    
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      };
      
      try {
        const response = await fetch(`${remote_url}/api/v1/superadmin/elds/add`, requestOptions);
        
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          console.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
        
        const data = await response.json();
  
        // After successfully adding the faculty, dispatch getFaculty to update the faculties list in the state.
        dispatch(getElds());
        
        return data;
        
      } catch (error) {
        console.error('Error adding elds:', error);
        return rejectWithValue(error.toString());
      }
    }
  );  
  export const updateElds = createAsyncThunk(
    'eldss/updateElds',
    async (elds_id, state) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.post(`${remote_url}/api/v1/superadmin/elds/edit`, {
          params: {
            elds_id,
            state,
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
        console.error('Error editing elds:', error);
      }
     }
  )

  export const deleteElds = createAsyncThunk(
    'eldss/deleteElds',
    async (id) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.delete(`${remote_url}/api/v1/superadmin/elds/delete`, {
          params: {
            id,
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
        console.error('Error deleting elds:', error);
      }
     } 
  )

  const initialState = {
    loading:false,
    eldss:[],
    isFetchEldsID:false,
    elds:{},
    currentPage: 1, 
  };
  export const eldsSlice = createSlice({
    name: 'eldss',
    initialState,
    reducers: {},
    extraReducers: {
        [getElds.pending]: (state) => {
            state.loading = true
          },
          [getElds.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.eldss = payload.eldss.data
            state.currentPage = payload.currentPage;
          },
                    [getElds.rejected]: (state) => {
            state.loading = false
          },
           
          //set post Product
          [addElds.fulfilled]: (state, { payload }) => {
            console.log('Payload from addFaculty:', payload);
            state.eldss.push(payload);
          },
              
          //set update Product
          [updateElds.fulfilled]:(state,{payload})=>{
            const index = state.eldss.findIndex(elds => elds.id === payload.id);
            state.eldss[index] = payload;
          },
     
           //set delete Product
           [deleteElds.fulfilled]:(state,{payload})=>{
            const index = state.eldss.findIndex(elds => elds.id === payload.id);
            state.eldss.splice(index, 1);
          }
    }
  })


  export default eldsSlice.reducer;