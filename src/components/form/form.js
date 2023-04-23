import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Form() {
  const { id } = useParams(); // identify by Company ID to fetch certain data that is requested 

  const [formData, setFormData] = useState({ // Form of updating log
    name: '', 
    email: '',
    message: '',
  });

  useEffect(() => { // formData is a dependency array which updates when formData get updated. Only the initial listing
    console.log(formData);
  }, [formData]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="form-container">
      <h2 className = "text">Fill out this form</h2>
      <form onSubmit={handleSubmit}>
        <label className = "text">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className = "text">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className = "text">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
