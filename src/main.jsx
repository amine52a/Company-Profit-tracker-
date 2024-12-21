import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './companents/Home';
import Users from './companents/Users/Users';
import Profile from './companents/Users/Profile'
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Profile" element={<Profile />} />







    </Routes>
  </Router>
);
