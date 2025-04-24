import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor'; // adjust path as needed
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';

const App = () => {
  return (
    <Router>
      <div className="bg-[#0c031c] min-h-screen relative">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
