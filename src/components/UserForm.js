
// import React, { useState } from "react";
// import axios from "axios";
// import "./UserForm.css";


// const UserForm = ({ type, setAction }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       if (type === "signup") {
//         if (formData.password !== formData.confirmPassword) {
//           alert("Passwords do not match. Please try again.");
//           setLoading(false);
//           return;
//         }

//         const userData = {
//           name: formData.name,
//           email: formData.email,
//           plainPassword: formData.password, // Ensure correct key
//           confirmPassword: formData.confirmPassword,
//         };

//         await axios.post("http://localhost:8081/auth/register", userData);
//         alert("Sign-up successful! Please log in to continue.");
//         setAction("login");
//       } else if (type === "login") {
//         const loginData = {
//           email: formData.email,
//           plainPassword: formData.password, // Backend expects "plainPassword"
//         };

//         const response = await axios.post("http://localhost:8081/auth/login", loginData);
//         console.log("Login Response:", response.data); // Debug log

//         if (response.status === 200) {
//           alert(response.data.message || "Login successful!"); 

//           if (response.data.user) {
//             localStorage.setItem("user", JSON.stringify(response.data.user));
//             window.location.href = "/dashboard"; // Redirect after login
//           }
//         }
//       }
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message || "Invalid email or password.");
//       } else {
//         setError("Error during login. Please try again.");
//       }
//       console.error("Login error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="user-form">
//       <h2>{type === "signup" ? "Sign Up" : "Login"}</h2>
//       <form onSubmit={handleSubmit}>
//         {type === "signup" && (
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         )}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         {type === "signup" && (
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         )}
//         <button type="submit" disabled={loading}>
//           {loading ? "Processing..." : type === "signup" ? "Sign Up" : "Login"}
//         </button>
//       </form>
//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// };

// export default UserForm;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./UserForm.css";

const UserForm = ({ type, setAction }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (type === "signup") {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match. Please try again.");
          setLoading(false);
          return;
        }

        const userData = {
          name: formData.name,
          email: formData.email,
          plainPassword: formData.password,
          confirmPassword: formData.confirmPassword,
        };

        await axios.post("http://localhost:8081/auth/register", userData);
        alert("Sign-up successful! Please log in to continue.");
        setAction("login");
      } else if (type === "login") {
        const loginData = {
          email: formData.email,
          plainPassword: formData.password,
        };

        const response = await axios.post("http://localhost:8081/auth/login", loginData);
        console.log("Login Response:", response.data);

        if (response.status === 200) {
          alert(response.data.message || "Login successful!");

          if (response.data.user) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/home"); // Redirect user to Home page
          }
        }
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Invalid email or password.");
      } else {
        setError("Error during login. Please try again.");
      }
      console.error("Login error:", error);
    } finally {
      setLoading(false);
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
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : type === "signup" ? "Sign Up" : "Login"}
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default UserForm;

