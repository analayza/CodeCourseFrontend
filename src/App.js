import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './pages/Student/home.jsx'
import Home from './pages/Student/home.jsx';
import ProfileConfiguration from './pages/Student/ProfileConfiguration.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<ProfileConfiguration/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
