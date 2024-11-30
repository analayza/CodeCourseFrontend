import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProfileConfiguration from './pages/Student/ProfileConfiguration';

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<ProfileConfiguration/>}>
              
            </Route>
        </Routes>
      </Router>
  );
}

export default App;
