// // src/components/AdminForm.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminForm = () => {
//   const [adminData, setAdminData] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setAdminData({ ...adminData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form submitted", adminData);

//     const validEmail = "admin@vivagoa.com";
//     const validPassword = "password";

//     if (
//       adminData.email === validEmail &&
//       adminData.password === validPassword
//     ) {
//       localStorage.setItem("isAdminLoggedIn", "true");

//       navigate("/admin-dashboard");
//     } else {
//       alert("Invalid login credentials");
//     }
//   };

//   return (
//     <div className="admin-form">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={adminData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={adminData.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminForm;



// import React, { useState } from "react";
// import axios from 'axios';

// const AdminForm = () => {
//   const [adminData, setAdminData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setAdminData({ ...adminData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Directly using Axios for admin login
//       const response = await axios.post("http://localhost:8081/admin/login", adminData);
//       if (response.status === 200) {
//         localStorage.setItem("isAdminLoggedIn", "true");
//         // Redirect to admin dashboard or perform other actions
//       }
//     } catch (error) {
//       console.error("Error during admin login:", error);
//       alert("Invalid login credentials");
//     }
//   };

//   return (
//     <div className="admin-form">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={adminData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={adminData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminForm;



import React, { useState } from 'react';
import axios from 'axios';
import './AdminForm.css'; // Importing the CSS for styling

const AdminForm = () => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (otpSent) {
        // Verify OTP
        const response = await axios.post('/api/auth/verify-otp', { email, otp, mobile, password });
        setMessage(response.data);
      } else {
        // Send OTP to mobile number
        const response = await axios.post('/api/auth/send-otp', { email, mobile });
        setOtpSent(true); // OTP sent, now ask user to enter OTP
        setMessage(response.data);
      }
    } catch (error) {
      setMessage('Error during registration');
    }
  };

  return (
    <div className="signup-container">
      <h2>Admin Registration</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        {otpSent && (
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" className="btn">
          {otpSent ? 'Verify OTP' : 'Send OTP'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminForm;
