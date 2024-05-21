import React, { useState } from 'react';
import './ConnectToMe.css'; 

const ConnectToMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', 
  message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,
    [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    console.log('Form data submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Your Name'
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConnectToMe;

