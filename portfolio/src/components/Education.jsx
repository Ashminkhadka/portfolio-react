import React from "react";
import "./Education.css";
import achsLogo from "../assets/achsLogo.jpg";
import newSum from "../assets/newSum.jpg";

const Education = () => {
  return (
    <div className="main">
      <div className="edu-main"  id="education">
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
          <ul>
            <li>
              <div className="Edu-block">
                <img className="asian" src={achsLogo} alt="Achs" />
                <h3>Asian College of Higher Studies</h3>
                <p>Ekantakuna, Lalitpur</p>
                <p>BSC. CSIT (2076 - 2081)</p>
              </div>
            </li>
            <li>
              <div className="Edu-block">
                <img className="new" src={newSum} alt="NewSummit" />
                <h3>New Summit College</h3>
                <p>Maitidevi, Kathmandu</p>
                <p> +2 Science (2074 - 2076)</p>
              </div>
            </li>
            {/* <li>
              <div className="Edu-block">
                <img src={achsLogo} alt="Achs" />
                <h3>Asian College of Higher Studies</h3>
                <p>Ekantakuna, Lalitpur</p>
                <p>BSC. CSIT (2076 - 2081)</p>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
