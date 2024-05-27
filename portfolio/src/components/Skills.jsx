import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import './Skills.css';

const Skills = () => {
  return (
    <div id="skill" className='skillMain'>
      <div className='skillsContent'>
        <h4>Skills</h4>
      </div>
      <div className='para'>
        <p>Demonstrating proficiency in Frontend, Backend,<br/>
           and Database development with key technical skills.</p>
      </div>
      <div className='skillContainer'>
        <div className='skillCard'>
          <h5>Frontend</h5>
          <div className='skillItem'>
            <p>
            <FaReact /> React
            </p>
          </div>
        </div>
        <div className='skillCard'>
          <h5>Backend</h5>
          <div className='skillItem'>
            <FaNodeJs /> Node.js
          </div>
        </div>
        <div className='skillCard'>
          <h5>Database</h5>
          <div className='skillItem'>
            <FaDatabase /> MongoDB
            MySQL
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
