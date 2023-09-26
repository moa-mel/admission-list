import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { remote_url } from '../config'


export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user, thunkAPI, {dispatch}) => {
        console.log("newUser:", user);
        console.log("thunkAPI:", thunkAPI);
        console.log("dispatch:", dispatch);
        const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
        localStorage.setItem('token_superAdmin', token);
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(user);
            const {data} = await axios.post(`${remote_url}/api/v1/superadmin/user/register`
                , body, config);
            console.log( 'new user response',data);
            const { title, email, first_name, last_name, middle_name, phone_1, phone_2, account_type } = user;
            dispatch(getUser()); 
            return { data, pagination: data.pagination } ;
        } catch (error) {
            console.error(error.response.data);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const request = await axios.post(`${remote_url}/api/v1/login`, userCredentials)
        const response = await request.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    }
)

export const getUser = createAsyncThunk(
    'user/getUser',
    async ({ status, email, password }) => {
        const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99';
        localStorage.setItem('token_superAdmin', token);

        try {
            const response = await axios.get(`${remote_url}/api/v1/superadmin/user/list?account_type=&pagination=50&status=enabled`, {
                params: {
                    pagination: 50,
                    status: status || 'enabled', // Default status value
                    email,
                    password,
                },
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            // Assuming the response contains the data you need
         console.log('not getting users', response)
            const data = response.data.users.data;
            console.log('olaitan user data')
            return data;
        } catch (error) {
            // Log the detailed error information
            console.error('Error fetching users:', error);
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
)

export const deleteUser = createAsyncThunk(
    'user/deleteuser',
    async (email, password) => {
        const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
        localStorage.setItem('token_superAdmin', token);
        try {
            const response = await axios.delete(`${remote_url}/api/v1/superadmin/faculty/delete`, {
                params: {
                    email,
                    password,
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
            console.error('Error deleting user:', error);
        }
    }
)

export const enableUser = createAsyncThunk(
    'user/enableUser',
    async (user, { dispatch, rejectWithValue }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      };
      try {
        const response = await fetch(`${remote_url}/api/v1/superadmin/user/enable`, requestOptions);
        
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          console.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
        const data = await response.json();
        // After successfully adding the faculty, dispatch getFaculty to update the faculties list in the state.
        dispatch(getUser()); 
        return data;
      } catch (error) {
        console.error('Error enabling user:', error);
        return rejectWithValue(error.toString());
      }
    }
  );

  export const disableUser = createAsyncThunk(
    'user/disableUser',
    async (user, { dispatch, rejectWithValue }) => {
      const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; 
      localStorage.setItem('token_superAdmin', token);
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      };
      try {
        const response = await fetch(`${remote_url}/api/v1/superadmin/user/disable`, requestOptions);
        
        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          console.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
        const data = await response.json();
        // After successfully adding the faculty, dispatch getFaculty to update the faculties list in the state.
        dispatch(getUser()); 
        return data;
      } catch (error) {
        console.error('Error disabling user:', error);
        return rejectWithValue(error.toString());
      }
    }
  );



const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: [],
        error: null,
        pagination: {
            total_pages: 1,
        },
       /* newUser: [] */
    },

    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state) => {
                state.loading = true;
                // state.user = null;
                // console.log("register rejected errdj", action)
                /*console.log(action.error);
                if (action.error.message === "Request failed with status code 401") {
                    state.error = `Access Denied Invalid Credentials`;
                } else {
                    state.error = action.error.message;
                }*/
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Assuming the email is in action.payload.email
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = true;
                state.user = null;
                console.log('login rejected err', action)
               /* console.log(action.error.message);
                if (action.error.message === "Request failed with status code 401") {
                    state.error = `Access Denied Invalid Credentials`;
                } else {
                    state.error = action.error.message;
                } */
            })
            .addCase(getUser.pending, (state) => {
                state.loading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload.users && Array.isArray(action.payload.users.data)) {
                    state.user = action.payload.users.data; // Assuming this is an array
                } else {
                    console.error("Data is not an array:", action.payload.users.data);
                    // Handle the case where data is not an array
                }
                state.pagination = action.payload.pagination;
                state.status = action.payload.status;
            })
            .addCase(getUser.rejected, (state) => {
                state.loading = false
            })
            .addCase(deleteUser.fulfilled, (state,payload)=>{
                const index = state.user.findIndex(user => user.id === payload.id);
                state.user.splice(index, 1);
            })
            .addCase(enableUser.fulfilled, (state,{payload})=>{
                const index = state.user.findIndex(user => user.id === payload.id);
                state.user.splice(index, 1);
            })
            .addCase(disableUser.fulfilled, (state,{payload})=>{
                const index = state.user.findIndex(user => user.id === payload.id);
                state.user.splice(index, 1);
            })
    }
});

export default userSlice.reducer;