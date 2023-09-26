import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {remote_url} from '../config' 


  
export const getCatchment = createAsyncThunk(
    'catchments/getCatchment',
    async () => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);

      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/catchment/list`, {
          
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
        console.error('Error fetching catchment:', error);
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
  
  

  export const addCatchment = createAsyncThunk(
    'catchments/addCatchment',
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
        const response = await fetch(`${remote_url}/api/v1/superadmin/catchment/add`, requestOptions);
        
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          console.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
        
        const data = await response.json();
  
        // After successfully adding the faculty, dispatch getFaculty to update the faculties list in the state.
        dispatch(getCatchment());
        
        return data;
        
      } catch (error) {
        console.error('Error adding catchment:', error);
        return rejectWithValue(error.toString());
      }
    }
  );  


  export const updateCatchment = createAsyncThunk(
    'catchments/updateCatchment',
    async (catchment_id, state) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.post(`${remote_url}/api/v1/superadmin/catchment/edit`, {
          params: {
            catchment_id,
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
        console.error('Error editing catchment:', error);
      }
     }
  )

  export const deleteCatchment = createAsyncThunk(
    'catchments/deleteCatchment',
    async () => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.delete(`${remote_url}/api/v1/superadmin/catchment/delete`, {
          
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });     
        // Assuming the response contains the data you need
        const data = response.data;
        return data;
      } catch (error) {
        console.error('Error deleting catchment:', error);
      }
     } 
  )

  const initialState = {
    loading:false,
    catchments:[],
    isFetchCatchmentID:false,
    catchment:{},
    currentPage: 1, 
  };
  export const catchmentSlice = createSlice({
    name: 'catchments',
    initialState,
    reducers: {},
    extraReducers: {
        [getCatchment.pending]: (state) => {
            state.loading = true
          },
          [getCatchment.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.catchments = payload.catchments.data
            state.currentPage = payload.currentPage;
          },
                    [getCatchment.rejected]: (state) => {
            state.loading = false
          },
           
          //set post Product
          [addCatchment.fulfilled]: (state, { payload }) => {
            console.log('Payload from addCatchment:', payload);
            state.catchments.push(payload);
          },
              
          //set update Product
          [updateCatchment.fulfilled]:(state,{payload})=>{
            const index = state.catchments.findIndex(catchment => catchment.id === payload.id);
            state.catchment[index] = payload;
          },
     
           //set delete Product
           [deleteCatchment.fulfilled]:(state,{payload})=>{
            const index = state.catchments.findIndex(catchment => catchment.id === payload.id);
            state.catchments.splice(index, 1);
          }
    }
  })


  export default catchmentSlice.reducer;