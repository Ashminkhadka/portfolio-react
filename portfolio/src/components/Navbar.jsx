import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiGitconnected } from "react-icons/si";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    // e.preventDefault();
    navigate("#");
    setShowMediaIcons(false);
  };

  const handleLinkClick = () => {
    setShowMediaIcons(false);
  };

  // const handleDownload = () =>{
    
  //   const link = document.createElement('a');
  //   link.href = 'C:/Users/ashmi/OneDrive/Documents/Resume/RESUME.pdf';
  //   link.download = 'RESUME.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <span>A</span>shmin <span>K</span>umar <span>K</span>hadka
        </h2>
      </div>
      <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
        <ul>
          <li>
            <a href="#home" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="#education" onClick={handleLinkClick}>Education</a>
          </li>
          <li>
            <a href="#skill" onClick={handleLinkClick}>Skills</a>
          </li>
          <li>
            <a href="#project" onClick={handleLinkClick}>Projects</a>
          </li>
          <li>
            <button className="connectMe" onClick={handleClick}>
              <a href="#connect">
                <span className="button_text">Connect To Me</span>
              </a>
            </button>
          </li>
          <li>
          <a href={`/RESUME.pdf`} download="RESUME.pdf">
          <button className="resume">Resume</button>
          </a>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
