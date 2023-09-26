import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/UserSlice"
import courseReducer from "./redux/CourseSlice";
import facultyReducer from './redux/FacultySlice'
import catchmentReducer from './redux/CatchmentSlice'
import eldsReducer from './redux/EldsSlice'
import subjectReducer from './redux/SubjectSlice'
import sessionReducer from './redux/SessionSlice'
import candidateReducer from './redux/CandidateSlice'
import admissionReducer from "./redux/AdmissionSlice";


const store = configureStore({
    reducer:{
        user: userReducer,
        courses: courseReducer,
        faculties: facultyReducer,
        catchments: catchmentReducer,
        eldss: eldsReducer,
        subjects: subjectReducer,
        sessions: sessionReducer,
        candidates: candidateReducer,
        admissions: admissionReducer,
    }
})

export default store;