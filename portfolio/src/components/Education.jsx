import React from "react";
import "./Education.css";
import achsLogo from '../assets/achsLogo.jpg'

const Education = () => {
  return (
    <div className="edu-main">
      <div className="educationContent">
        <h1>Education</h1>
      </div>

      <div className="para">
        <p>
          My education has been a journey of self-discovery and growth. <br />
          My educational details are as follows.
        </p>
      </div>

      <div className="Edu-container">
        <div className="Edu-block">
          <img src={achsLogo} alt="Achs"/>
          <h3>Asian College of Higher Studies</h3>
          <p>Ekantakuna, Lalitpur</p>
          <p>BSC. CSIT (2076 - 2081)</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
