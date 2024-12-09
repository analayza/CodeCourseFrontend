import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './pages/home.jsx'
import Home from './pages/home.jsx';
import ProfileConfiguration from './pages/Student/ProfileConfiguration.jsx';
import UpdateCourse from './pages/Teacher/UpdateCourse.jsx';
import CourseDetails from './pages/CourseDetails.jsx';
import UpdateModule from './pages/Teacher/UpdateModule.jsx';
import UpdateModuleClass from './pages/Teacher/UpdateModuleClass.jsx';

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
      </Routes>
    </Router>
  );
}

export default App;
