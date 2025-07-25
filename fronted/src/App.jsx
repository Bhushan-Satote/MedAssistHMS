import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'

import Registration from './components/auth/Registration'; // Updated path with correct case
import Login from './components/auth/login';
import ForgetPassword from './components/auth/Forgetpassword';
import ResetPassword from './components/auth/ResetPassword';
import Dashboard from './components/Doctors/Dashbord/Dashbord';
import UpdateProfile  from './components/Doctors/profile/UpdateProfile' ;
import PatientUpdateProfile from './components/Patients/Profile/PatientUpdateProfile';
import PatientDashboard from './components/Patients/Dashbord/PatientDashboard';
import Appointment from './components/Doctors/Appoiment/Appoiment';

import ShowPatient from './components/Doctors/patient/ShowPatient';
import AboutUs from './components/AboutUs';
import ManageAvailability from './components/Doctors/Availability/ManageAvailability';
import ContactUs from './components/ContactUs';
import ChatBoard from './components/ChatBoard';
// import AyurvedicChat from './components/AyurvedicChat';
import BookAppointment from './components/Patients/Appointments/BookAppointments';
import ShowAvailableDoctor from './components/Patients/AvailableDoctor/ShowAvailableDoctor';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/doctor/dashboard" element={<Dashboard />} />
        <Route path="/doctor/update-profile" element={<UpdateProfile />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/update-profile" element={<PatientUpdateProfile/>} />
        <Route path="/doctor/appointments" element={<Appointment />} />
        
        <Route path="/doctor/patients" element={<ShowPatient />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/doctor/availability" element={<ManageAvailability />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/patient/appointments" element={<BookAppointment />} />
        <Route path="/patient/showavailabledoctor" element={<ShowAvailableDoctor />} />
        
      </Routes>
      <ChatBoard />
      {/* <AyurvedicChat/> */}
    </Router>
    </>

  )
}

export default App;
