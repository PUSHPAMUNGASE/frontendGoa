// src/components/AdminForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminForm = () => {
  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted", adminData);

    const validEmail = "admin@vivagoa.com";
    const validPassword = "password";

    if (
      adminData.email === validEmail &&
      adminData.password === validPassword
    ) {
      localStorage.setItem("isAdminLoggedIn", "true");

      navigate("/admin-dashboard");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="admin-form">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={adminData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={adminData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminForm;
