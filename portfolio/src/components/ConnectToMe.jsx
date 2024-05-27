import React, { useState } from "react";
import "./ConnectToMe.css";

const ConnectToMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="connect">
      <h6>Connect To Me</h6>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          />
        </div>
        <button className="submit" type="submit">Submit</button>
      </form>

      <div>
        {submittedData.map((curElem, index) => {
          const { name, email, message } = curElem;
          return (
            <div className="ShowDataStyle" key={index}>
              <p>
                <strong>Name:</strong> {name}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Message:</strong> {message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectToMe;

// import React, { useState, useRef } from 'react';
// import './ConnectToMe.css';
// import emailjs from '@emailjs/browser'

// const ConnectToMe = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_zz3aacy',
//        'template_u157qnq', form.current, {
//         publicKey: 'fGP_CYv5tOfMUdkAR',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };
//   // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   // const [submittedData, setSubmittedData] = useState([]);

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   // const handleSubmit = (e) => {
//   //   // e.preventDefault();
//   //   console.log('Form data submitted:', formData);
//   //   setSubmittedData([...submittedData, formData]);
//   //   setFormData({ name: '', email: '', message: '' });
//   // };

//   return (
//     <div id='connect'>
//       {/* handleSubmit, */}
//       <form ref={form} onSubmit={sendEmail}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//           />
//         </div>
//         <div>
//           <label>Message</label>
//           <textarea
//             name="message"
//           />
//         </div>
//         <button type="submit" value={send}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ConnectToMe;
