import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import ConnectToMe from './components/ConnectToMe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/connect" element={<ConnectToMe />} />
      </Routes>
    </Router>
  );
}

// function App(){
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element:<><Navbar/><Home/></>
//     },
//     {
//       path: "/about",
//       element:<><Navbar/><About/></>
//     },
//     {
//       path: "/projects",
//       element:<><Navbar/><Projects/></>
//     },
//     {
//       path: "/contact",
//       element:<><Navbar/><Contact/></>
//     },
//     {
//       path: "/resume",
//       element:<><Navbar/><Resume/></>
//     }
//   ])
//   return(
//     <>
//     <RouterProvider router={router}/>
//     </>
//   )
// }

export default App
