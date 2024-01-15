import React, { useState } from 'react';
import './Register.css'; // Import the CSS file


const Register= () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    rollNumber: '',
    email: '',
    // libraryId: '',
    branch: '',
    year: '',
    // isHosteler: false,
    // isDayScholar: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Ensure numeric values only for Phone Number
    if (name === 'phoneNumber' && type === 'text') {
      const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? e.target.checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (backend/API call) here
  };

  return (
    <div className="registration-container">
      <h1 className="registration-heading">Registration Form</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <div className="phone-input">
            
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </div>
        </div>


        <div className="form-group">
          <label htmlFor="rollNumber">University Roll No.:</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@gmail.com"
            value={formData.email}
            onChange={handleChange}
            placeholder="test123@gmail.com"
            required
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="libraryId">Library ID:</label>
          <input
            type="text"
            id="libraryId"
            name="libraryId"
            value={formData.libraryId}
            onChange={handleChange}
            required
          />
        </div> */}

        <div className="form-group">
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>
        {/* <div className="form-group radio-group">
          <label>Accommodation:</label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="accommodation"
                value="hosteler"
                checked={formData.accommodation === 'hosteler'}
                onChange={handleChange}
              />
              Hosteler
            </label>

            <label>
              <input
                type="radio"
                name="accommodation"
                value="dayScholar"
                checked={formData.accommodation === 'dayScholar'}
                onChange={handleChange}
              />
              Day Scholar
            </label>
          </div>
        </div> */}


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
