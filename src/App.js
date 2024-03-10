import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage';
import LearnAbout from './pages/LearnAbout';
import Competition from './pages/Competition';
import ContactForm from './pages/ContactForm';
import Register from './pages/Reguster'; // Corrected typo here
import ContactComp from './pages/ContactComp';
import Signup from './components/Signup';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/learnabout" element={<LearnAbout />} />
          <Route path="/Competition" element={<Competition />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/register" element={<Register />} /> // Corrected typo here
          <Route path="/ContactComp" element={<ContactComp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} /> // Corrected route path and component
        </Routes>
      </div>
    </Router>
  );
}

export default App;
