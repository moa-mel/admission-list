import React from "react"
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import ResetEmail from "./pages/ResetEmail";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import UserManage from "./pages/UserManage";
import Programlist from "./pages/Programlist";
import SubjectCombination from "./pages/SubjectCombination";
import AdmissionCriteria from "./pages/AdmissionCriteria";
import StudentList from "./pages/StudentList";
import AdmissionList from "./pages/AdmissionList"
import Session from "./pages/Session"
import UpdatePassword from "./pages/UpdatePassword"
import Help from "./pages/Help"
import Faculty from "./pages/Faculty"
import AddUser from "./user/AddUser";
import UpdateUser from "./user/UpdateUser";
import Plview from "./program/Plview";
import Addprogram from "./program/Addprogram";
import Updateprogram from "./program/Updateprogram";
import Scview from "./Subject/Scview";
import DownloadAd from "./AdmissionCrit/DownloadAd";
import Merit from "./AdmissionCrit/Merit";
import Catchment from "./AdmissionCrit/Catchment"
import Elds from "./AdmissionCrit/Elds"
import Addmerit from "./AdmissionCrit/Addmerit";
import Addcatch from "./AdmissionCrit/Addcatch";
import Addelds from "./AdmissionCrit/Addelds";
import Updatecatch from "./AdmissionCrit/Updatecatch"
import Updatemerit from "./AdmissionCrit/Updatemerit"
import Updateelds from "./AdmissionCrit/Updateelds"
import DownloadList from "./AdmsList/DownloadList";
import ViewAdmList from "./AdmsList/ViewAdmList"
import UpdateFaculty from "./Facult/UpdateFaculty";
import ViewFaculty from "./Facult/ViewFaculty";


function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetemail" element={<ResetEmail/>} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/usermanagement" element={<UserManage/>}/>
      <Route path="/programlist" element={<Programlist/>} />
      <Route path="/subject" element={<SubjectCombination/>} />
      <Route path="/admissioncriteria" element={<AdmissionCriteria/>} />
      <Route path="/studentlist" element={<StudentList/>} />
      <Route path="/admissionlist" element={<AdmissionList/>} />
      <Route path="/session" element={<Session/>} />
      <Route path="/updatepassword" element={<UpdatePassword/>} />
      <Route path="/help" element={<Help/>} />
      <Route path="/faculty" element={<Faculty/>} />
      <Route path="/adduser" element={<AddUser/>} />
      <Route path="/updateuser" element={<UpdateUser/>} />
      <Route path="/plview" element={<Plview/>} />
      <Route path="/addprogram" element={<Addprogram/>} />
      <Route path="/updateprogram" element={<Updateprogram/>} />
      <Route path="/scview" element={<Scview/>} />
      <Route path="/downloadAdm" element={<DownloadAd/>} />
      <Route path="/admissioncriteria/merit" element={<Merit/>} />
      <Route path="/addmerit" element={<Addmerit/>} />
      <Route path="/catchment" element={<Catchment/>} />
      <Route path="/elds" element={<Elds/>} />
      <Route path="/addcatch" element={<Addcatch/>} />
      <Route path="/addelds" element={<Addelds/>} />
      <Route path="/updatecatch" element={<Updatecatch/>} />
      <Route path="/updatemerit" element={<Updatemerit/>} />
      <Route path="/updateelds" element={<Updateelds/>} />
      <Route path="/downloadlist" element={<DownloadList/>} />
      <Route path="/viewlist" element={<ViewAdmList/>} />
      <Route path="/viewfaculty" element={<ViewFaculty/>} />
      <Route path="/updatefaculty" element={<UpdateFaculty/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
