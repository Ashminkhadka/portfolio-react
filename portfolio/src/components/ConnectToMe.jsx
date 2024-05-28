import React, { useState, useRef } from 'react';
import './ConnectToMe.css';
import emailjs from '@emailjs/browser';

const ConnectToMe = () => {
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zz3aacy',
        'template_u157qnq',
        form.current,
        'fGP_CYv5tOfMUdkAR'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage('Message sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' });
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id="connect">
      <h6>Connect To Me</h6>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" value={formData.user_name}
            onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" value={formData.user_email}
            onChange={handleChange} required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message}
            onChange={handleChange} required />
        </div>
        <button className="submit" type="submit">Submit</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default ConnectToMe;


// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import "./ConnectToMe.css";

// const ConnectToMe = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submittedData, setSubmittedData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", formData);
//     setSubmittedData([...submittedData, formData]);
//     sendEmail(formData);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const sendEmail = (formData) => {
//     emailjs.sendForm("service_zz3aacy", "template_u157qnq", e.target, "fGP_CYv5tOfMUdkAR")
//       .then((result) => {
//         console.log("Email sent successfully:", result.text);
//         alert("Your message has been sent successfully!");
//       }, (error) => {
//         console.error("Failed to send email:", error.text);
//         alert("An error occurred while sending your message. Please try again later.");
//       });
//   };

//   return (
//     <div id="connect">
//       <h6>Connect To Me</h6>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="user_name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your Name"
//             required
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="user_email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your Email"
//             required
//           />
//         </div>
//         <div>
//           <label>Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Message"
//             required
//           />
//         </div>
//         <button className="submit" type="submit">Submit</button>
//       </form>

//       <div>
//         {submittedData.map((curElem, index) => {
//           const { name, email, message } = curElem;
//           return (
//             <div className="ShowDataStyle" key={index}>
//               <p>
//                 <strong>Name:</strong> {name}
//               </p>
//               <p>
//                 <strong>Email:</strong> {email}
//               </p>
//               <p>
//                 <strong>Message:</strong> {message}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ConnectToMe;