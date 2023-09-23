import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/UserSlice"
import courseReducer from "./redux/CourseSlice";
import facultyReducer from './redux/FacultySlice'


const store = configureStore({
    reducer:{
        user: userReducer,
        course: courseReducer,
        faculties: facultyReducer
    }
})

export default store;