import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import {remote_url} from '../config'




const initialState = []

const CourseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        addCourse: (state, action) =>{
            state.push(action.payload)
        }
    }
})

export const {addCourse} = CourseSlice.actions
export default CourseSlice.reducer