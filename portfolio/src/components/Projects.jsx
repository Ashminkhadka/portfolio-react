import React from "react";
import "./Projects.css";
import project1Image from "../assets/faceImage.jpg";
import project2Image from "../assets/project2.png";
import project3Image from "../assets/project2.png";


const Projects = () => {
  return (
    <div id="project">
      <div className="projectMain">
        <div className="projectContent">
          <h1>Projects</h1>
        </div>
        <div className="projectContainer">
          <div className="projectItems">
            <div className="project1">
              <a href="https://github.com/Ashminkhadka/FacialEmotionRecognition.git">
                <img
                  className="card-image"
                  src={project1Image}
                  alt="project 1 picture"
                ></img>
              </a>
              <h1 className="card-title">Facial Emotion Recognition</h1>
              <div className="para">
                <p>
                  This a project on Facial Emotion Recognition were
                  <br />
                  seven different emotions are identified.
                  <br />
                  Using CNN Algorithm.
                </p>
              </div>
            </div>
          </div>
          <div className="projectItems">
            <div className="project2">
              <a href="https://github.com/Ashminkhadka/login_register">
                <img
                  className="card-image"
                  src={project2Image}
                  alt="project 2 picture"
                ></img>
              </a>
              <h1 className="card-title">User Authentication</h1>
              <div className="para">
                <p>
                  This a project on login and register where
                  <br />
                  data of the user is passed to the database and register
                  <br />
                  Using MongoDB, Express, Node and ReactJS.
                </p>
              </div>
            </div>
          </div>
          <div className="projectItems">
            <div className="project3">
              <a href="https://github.com/Durgashankar-Bhandari/Job-Seeker.git">
                <img
                  className="card-image"
                  src={project3Image}
                  alt="project 3 picture"
                ></img>
              </a>
              <h1 className="card-title">Job Seeker</h1>
              <div className="para">
                <p>
                  This a project on Facial Emotion Recognition were
                  <br />
                  seven different emotions are identified.
                  <br />
                  Using CNN Algorithm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
