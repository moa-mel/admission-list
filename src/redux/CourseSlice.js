import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {remote_url} from '../config' 


  
export const getCourse = createAsyncThunk(
    'courses/getCourse',
    async () => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);

      try {
        const response = await axios.get(`${remote_url}/api/v1/superadmin/course/list?pagination=50`, {
          params: {
            pagination: 50,
          },
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });   
        // Assuming the response contains the data you need
        const data = response.data;
        return {courses: data};
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
  
  

  export const addCourse = createAsyncThunk(
    'courses/addCousre',
    async (course, { dispatch, rejectWithValue }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
    
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
      };
      try {
        const response = await fetch(`${remote_url}/api/v1/superadmin/course/add`, requestOptions);
        
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          console.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
        const data = await response.json();
        // After successfully adding the faculty, dispatch getFaculty to update the faculties list in the state.
        dispatch(getCourse());
        return data;
      } catch (error) {
        console.error('Error adding course:', error);
        return rejectWithValue(error.toString());
      }
    }
  );  


  export const updateCourse = createAsyncThunk(
    'courses/updateCourse',
    async (course_id, faculty_id, course, subject_code_1, subject_code_2, subject_code_3, subject_code_4, subject_code_5, subject_code_6, subject_code_7, subject_code_8) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.post(`${remote_url}/api/v1/superadmin/course/edit`, {
          params: {
            course_id, 
            faculty_id, 
            course, 
            subject_code_1, 
            subject_code_2, 
            subject_code_3, 
            subject_code_4, 
            subject_code_5, 
            subject_code_6, 
            subject_code_7, 
            subject_code_8
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
        console.error('Error editing course:', error);
      }
     }
  )

  export const deleteCourse = createAsyncThunk(
    'coursess/deleteCourse',
    async (course_id) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
      localStorage.setItem('token_superAdmin', token);
      try {
        const response = await axios.delete(`${remote_url}/api/v1/superadmin/course/delete`, {
          params: {
            course_id,
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
        console.error('Error deleting faculty:', error);
      }
     } 
  )

  const initialState = {
    loading:false,
    courses:[],
    isFetchCourseID:false,
    course:{},
    currentPage: 1, 
  };
  export const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: {
        [getCourse.pending]: (state) => {
            state.loading = true
          },
          [getCourse.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.courses = payload.courses.data
            state.currentPage = payload.currentPage;
          },
        [getCourse.rejected]: (state) => {
            state.loading = false
          },
           
          //set post Product
          [addCourse.fulfilled]: (state, { payload }) => {
            console.log('Payload from addCourse:', payload);
            state.faculties.push(payload);
          },
              
          //set update Product
          [updateCourse.fulfilled]:(state,{payload})=>{
            const index = state.courses.findIndex(course => course.id === payload.id);
            state.courses[index] = payload;
          },
     
           //set delete Product
           [deleteCourse.fulfilled]:(state,{payload})=>{
            const index = state.courses.findIndex(course => course.id === payload.id);
            state.courses.splice(index, 1);
          }
    }
  })


  export default courseSlice.reducer;