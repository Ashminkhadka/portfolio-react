import React, { useState } from "react";
import profile from "../assets/myImage.jpg";
import "./Home.css";
import Education from "./Education";
import Skills from "./Skills";
import ConnectToMe from "./ConnectToMe";
import Navbar from "./Navbar";
import Projects from "./Projects";


const Home = () => {
  return (
    <>
      <div className="content" id="home">
        <div className="portfolio-intro">
          <span className="name">
            Hi, I'm <br />
            Ashmin Kumar Khadka
          </span>
          <br />
          <p>
            <span>React Web Developer</span>
          </p>
          <br />
          <p>
            I am a motivated and versatile individual, always eager to take on{" "}
            <br />
            new challenges.
          </p>
        </div>
        
        <div className="profile-image">
          <img src={profile} alt="my profile" className="profile" />
        </div>
      </div>
      <Education />
      <Skills />
      <Projects />
      <ConnectToMe />
    </>
  );
};

export default Home;
