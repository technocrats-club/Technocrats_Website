import React, { useState } from "react";
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    // libraryId: '',
    branch: "",
    year: "",
    // isHosteler: false,
    // isDayScholar: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "phoneNumber" && type === "text") {
      const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? e.target.checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Registration Successful");
      })
      .catch((err) => {
        console.log(err);
        alert("Registration Failed");
      });
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

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
