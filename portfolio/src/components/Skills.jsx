import React from 'react';
import './Skills.css';
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import python from "../assets/python.png";

const Skills = () => {
  return (
    <div id="skill" className='skillMain'>
      <div className='skillsContent'>
        <h4>Skills</h4>
      </div>
      <div className='para'>
        <p>Demonstrating proficiency in key technical skills.</p>
      </div>
      <div className='skillContainer'>
        <div className='skillImages'>
          <div className='skillItem'>
            <img src={html} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className='skillItem'>
            <img src={css} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className='skillItem'>
            <img src={tailwind} alt="Tailwind" />
            <p>Tailwind</p>
          </div>
          <div className='skillItem'>
            <img src={react} alt="React" />
            <p>React</p>
          </div>
          <div className='skillItem'>
            <img src={node} alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className='skillItem'>
            <img src={mongodb} alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className='skillItem'>
            <img src={python} alt="Python" />
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;




// import React from 'react';
// import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
// import './Skills.css';
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import tailwind from "../assets/tailwind.png";
// import react from "../assets/react.png";
// import node from "../assets/node.png";
// import mongodb from "../assets/mongodb.png";
// import python from "../assets/python.png";

// const Skills = () => {
//   return (
//     <div id="skill" className='skillMain'>
//       <div className='skillsContent'>
//         <h4>Skills</h4>
//       </div>
//       <div className='para'>
//         <p>Demonstrating proficiency in Frontend, Backend,<br/>
//            and Database development with key technical skills.</p>
//       </div>
//       <div className='skillContainer'>
//         <div className='skillCard'>
//           <p>Frontend</p>
//             <img src={html}/>
//             <img src={css}/>
//             <img src={tailwind}/>
//             <img src={react}/>
//             <img src={node}/>
//             <img src={mongodb}/>
//             <img src={python}/>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

 {/* <div className='skillItem'> */}
            
            {/* <FaReact/>React  <FaNodeJs/>Node.js */}
          {/* </div> */}
   {/* <div className='skillCard'>
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
          
        </div> */}