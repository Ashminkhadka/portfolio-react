import React, { useState } from 'react';
import './ConnectToMe.css';

const ConnectToMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        {submittedData.map((curElem, index) => {
          const { name, email, message } = curElem;
          return (
            <div className="ShowDataStyle" key={index}>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Message:</strong> {message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectToMe;