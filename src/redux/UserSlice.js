import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {remote_url} from '../config'


export const registerUser = createAsyncThunk(
    'user/registerUser',
    async(userCredentials)=>{
        const token = '2|9kd74XHJPWoZD4qKichvW4OACl5q0puVobdikBNk69b85d99'; // Replace with the actual token
localStorage.setItem('token_superAdmin', token);
        console.log('Token:', token);
        const headers = {
            'Token': ` ${token}`,
            'Content-type' : 'application/json',
        }
        try{
            const req = await axios.post(`${remote_url}/api/v1/superadmin/user/register`, userCredentials, {headers}) 
            const response = await req.data;
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data; 
        }
        catch(err){
            throw err
        }
        
    }
)


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredentials)=>{
        const request = await axios.post(`${remote_url}/api/v1/login`, userCredentials)
        const response = await request.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    }
)

const userSlice = createSlice({
    name : 'user',
    initialState:{
        loading: false,
        user: null,
        error: null
    },
  
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending, (state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(registerUser.rejected,(state, action)=>{
            state.loading = true;
            state.user = null;
            console.log(action.error);
            if(action.error.message === "Request failed with status code 401"){
                state.error = `Access Denied Invalid Credentials`;
            } else{
            state.error = action.error.message;
        } 
        })
        .addCase(loginUser.pending, (state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload; // Assuming the email is in action.payload.email
            state.error = null;
          })
        .addCase(loginUser.rejected,(state, action)=>{
            state.loading = true;
            state.user = null;
            console.log(action.error.message);
            if(action.error.message === "Request failed with status code 401"){
                state.error = `Access Denied Invalid Credentials`;
            } else{
            state.error = action.error.message;
        }
        })
    }
});

export default userSlice.reducer;