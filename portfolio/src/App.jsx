import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import ConnectToMe from './components/ConnectToMe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from './components/Skills'
import Education from './components/Education'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/connect" element={<ConnectToMe />} />
      </Routes>
    </Router>
  );
}

export default App
