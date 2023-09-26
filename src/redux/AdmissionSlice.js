import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {remote_url} from '../config' 


export const getAdmissionCriteria = createAsyncThunk(
    'admissions/getAdmissionCriteria',
    async (merit, catchment, elds, discretion, { dispatch }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/admission/criteria/get`, {
          params: {
            merit, 
            catchment, 
            elds, 
            discretion,
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
  
  export const getGenerateAdmission = createAsyncThunk(
    'admissions/getGenerateAdmission',
    async (merit, catchment, elds, discretion, { dispatch }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/admission/generate`, {
          params: {
            merit, 
            catchment, 
            elds, 
            discretion,
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

  export const getDownloadAdmission = createAsyncThunk(
    'admissions/getDownloadAdmission',
    async (merit, catchment, elds, discretion, { dispatch }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/admission/download?type=All&session=Current Session`, {
          params: {
            merit, 
            catchment, 
            elds, 
            discretion,
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

   
  export const updateAdmissionCriteria = createAsyncThunk(
    'admissions/updateAdmissionCriteria',
    async (merit, catchment, elds, discretion) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.post(`${remote_url}/api/v1/superadmin/admission/criteria/update`, {
          params: {
            merit,
            catchment,
            elds,
            discretion
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
        console.error('Error updating admission criteria:', error);
      }
     }
  )



  const initialState = {
    loading:false,
    admissions:[],
    isFetchAdmissionID:false,
    admission:{},
  };
  export const admissionSlice = createSlice({
    name: 'admissions',
    initialState,
    reducers: {},
    extraReducers: {
        [getAdmissionCriteria.pending]: (state) => {
            state.loading = true
          },
          [getAdmissionCriteria.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.admissions = payload.admissions.data
          },
          [getAdmissionCriteria.rejected]: (state) => {
            state.loading = false
          },
           
          [getGenerateAdmission.pending]: (state) => {
            state.loading = true
          },
          [getGenerateAdmission.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.admissions = payload.admissions.data
          },
          [getGenerateAdmission.rejected]: (state) => {
            state.loading = false
          },

          [getDownloadAdmission.pending]: (state) => {
            state.loading = true
          },
          [getDownloadAdmission.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.admissions = payload.admissions.data
          },
          [getDownloadAdmission.rejected]: (state) => {
            state.loading = false
          },
              
          //set update Product
          [updateAdmissionCriteria.fulfilled]:(state,{payload})=>{
            const index = state.admissions.findIndex(admission => admission.id === payload.id);
            state.admissions[index] = payload;
          },
     
           
    }
  })


  export default admissionSlice.reducer;