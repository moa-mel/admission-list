import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { remote_url } from '../config'


export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userCredentials) => {
        const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
        localStorage.setItem('token_superAdmin', token);
        console.log('Token:', token);
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
        try {
            const req = await axios.post(`${remote_url}/api/v1/superadmin/user/register`, userCredentials, { headers })
            const response = req.data;
            localStorage.setItem('user', JSON.stringify(response.data));
            const { title, email, first_name, last_name, middle_name, phone_1, phone_2, account_type } = userCredentials;
            console.log('User credentials:', title, email, first_name, last_name, middle_name, phone_1, phone_2, account_type);
            return response.data;
        }
        catch (err) {
            console.error("Error Message:", err.response.data.message);
            console.error("Field Errors:", err.response.data.errors);
            throw err;
        }
    }
)


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
    async ({ page, status, email, password }) => {
        const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99';
        localStorage.setItem('token_superAdmin', token);

        try {
            const response = await axios.get(`${remote_url}/api/v1/superadmin/user/list?account_type=&pagination=50&status=enabled`, {
                params: {
                    pagination: 50,
                    status: status || 'enabled', // Default status value
                    page,
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
)


const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: [],
        error: null,
        pagination: {},
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
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = true;
                state.user = null;
                console.log(action.error);
                if (action.error.message === "Request failed with status code 401") {
                    state.error = `Access Denied Invalid Credentials`;
                } else {
                    state.error = action.error.message;
                }
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
                console.log(action.error.message);
                if (action.error.message === "Request failed with status code 401") {
                    state.error = `Access Denied Invalid Credentials`;
                } else {
                    state.error = action.error.message;
                }
            })
            .addCase(getUser.pending, (state) => {
                state.loading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload.faculties.data;
                // Add pagination and status to the state
                state.pagination = action.payload.pagination;
                state.status = action.payload.status;
            })
            .addCase(getUser.rejected, (state) => {
                state.loading = false
            })
    }
});

export default userSlice.reducer;