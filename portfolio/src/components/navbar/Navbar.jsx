import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiGitconnected } from "react-icons/si";
// import HamburgerMenu from '../HamburgerMenu';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <span>A</span>SHMIN <span>K</span>u. <span>K</span>HADKA
        </h2>
      </div>
      <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
      <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/skill">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/project">Projects</NavLink>
            </li>
            <button>
                <span className="button_text">Connect To Me</span>
                <span className="button_icon">
                  <SiGitconnected/> 
                </span>
            </button>
          </ul>
      </div>
      <div className="social-media">
        <ul className="social-media-desktop">
          <a href="https://www.linkedin.com/in/ashmin-khadka-785033287/">
            <FaLinkedin className="Linkedin" />
          </a>
          <a href="https://github.com/Ashminkhadka">
            <FaGithub className="Github" />
          </a>
        </ul>
        <div className="hamburger-menu">
          <a href="#"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu/>
          </a>
        </div>
      </div>
    </nav>
  );
 };
export default Navbar;
