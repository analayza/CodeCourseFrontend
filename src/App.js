import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './pages/Student/home.jsx'
import Home from './pages/Student/home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
