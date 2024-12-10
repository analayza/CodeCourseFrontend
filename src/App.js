import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProfileConfiguration from './pages/Student/ProfileConfiguration.jsx';
import UpdateCourse from './pages/Teacher/UpdateCourse.jsx';
import CourseDetails from './pages/CourseDetails.jsx';
import UpdateModule from './pages/Teacher/UpdateModule.jsx';
import UpdateModuleClass from './pages/Teacher/UpdateModuleClass.jsx';
import CourseCreation from './pages/Teacher/CourseCreationPage.jsx';
import ProfileConfigurationTeacher from './pages/Teacher/ProfileConfiguration.jsx';
import Login from './pages/LoginPage.jsx';
import Register from './pages/RegisterPage.jsx';
import Home from './pages/home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Profile' element={<ProfileConfiguration/>}></Route>
        <Route path='/UpdateCourse' element={<UpdateCourse/>}></Route>
        <Route path="/course-details/:id" element={<CourseDetails/>}></Route>
        <Route path='/UpdateModule' element={<UpdateModule/>}></Route>
        <Route path='/UpdateModuleClass' element={<UpdateModuleClass/>}></Route>
        <Route path='/CourseCreation' element={<CourseCreation/>}></Route>
        {/* <Route path='/ProfileConfigurationTeacher' element={<ProfileConfigurationTeacher/>}></Route> */}
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
