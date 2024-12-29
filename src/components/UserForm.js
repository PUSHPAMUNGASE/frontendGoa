import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = ({ type, setAction }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    if (type === "signup") {
      if (formData.password === formData.confirmPassword) {
        localStorage.setItem("userName", formData.name);

        alert("Sign-up successful! Please log in to continue.");
        setAction("login");
      } else {
        alert("Passwords do not match. Please try again.");
      }
    } else if (type === "login") {
      if (formData.email && formData.password) {
        const storedName = localStorage.getItem("userName");

        if (storedName) {
          alert(`Welcome ${storedName}! Explore Goa.`);
        } else {
          alert("User not found. Please sign up first.");
        }

        navigate(`/home?name=${formData.name}`);
      } else {
        alert("Please enter valid credentials.");
      }
    }
  };

  return (
    <div className="user-form">
      <h2>{type === "signup" ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {type === "signup" && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {type === "signup" && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">{type === "signup" ? "Sign Up" : "Login"}</button>
      </form>
    </div>
  );
};

export default UserForm;
