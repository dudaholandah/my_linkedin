import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notification from './pages/Notification';
import './App.scss';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/signUp" element= {<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
