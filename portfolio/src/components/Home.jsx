import React, { useState } from "react";
import profile from "../assets/myImage.jpg";
import "./Home.css";
import Education from "./Education";
import Skills from "./Skills";
import ConnectToMe from "./ConnectToMe";
import Navbar from "./Navbar";

const Home = () => {
  const [click, setClick] = useState(false);

  const renderContent = () => {
    switch (click) {
      case "/education":
        return <Education />;
      case "/skills":
        return <Skills />;
      case "/projects":
        return <Projects />;
      case "/connect":
        return <ConnectToMe />;

      default:
        return (
          <>
            <div className="content">
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
                  I am a motivated and versatile individual, always eager to
                  take on <br />
                  new challenges.
                </p>
              </div>
              <div className="profile-image">
                <img src={profile} alt="my profile" className="profile" />
              </div>
            </div>
            <Education />
            <Skills />
          </>
        );
    }
  };
  return (
    <div>
      <Navbar setClick={setClick} />
      {renderContent()}
    </div>
  );
};

export default Home;
