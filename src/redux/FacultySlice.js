import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from "axios";
import {remote_url} from '../config' 


  
export const getFaculty = createAsyncThunk(
    'faculties/getfaculty',
    async (faculty, { dispatch }) => {
      const { old_subject_code, new_subject_code, subject } = faculty;
  
      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/faculty/list`, {
          params: {
            pagination: 50,
          },
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            old_subject_code,
            new_subject_code,
            subject,
          },
        });
        // Assuming the response contains the data you need
        const data = response.data;
        return data;
      } catch (error) {
        // Handle errors appropriately
        console.error('Error fetching faculty:', error);
        throw error;
      }
    }
  );
  
  

  export const addFaculty = createAsyncThunk(
    'faculties/addFaculty',
    async (faculty, { dispatch }) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(faculty)
        };
      const response = await fetch(`{{remote_url}}/api/v1/superadmin/faculty/add`,requestOptions).then(
          (data) => data.json()
      )
      const finalPayload = response
      return finalPayload;
     }
  )

  export const updateFaculty = createAsyncThunk(
    'faculties/updateFaculty',
    async (faculty, { dispatch }) => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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
      const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
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
    faculty:{}
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
            state.faculties = payload
          },
          [getFaculty.rejected]: (state) => {
            state.loading = false
          },
           
          //set post Product
          [addFaculty.fulfilled]:(state,{payload})=>{
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