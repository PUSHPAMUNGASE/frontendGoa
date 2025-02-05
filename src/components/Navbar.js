// import React, { useState, useEffect, useRef } from "react";
// import "./Navbar.css";
// import { useNavigate, Link } from "react-router-dom";
// import disc from "../assets/disc.jpg"

// const Navbar = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const [isAdmin, setIsAdmin] = useState(false); // Track admin status
//   const dropdownRef = useRef(null); // Reference for dropdown
//   const navigate = useNavigate();

//   // Function to update login and admin states
//   const updateLoginStates = () => {
//     const userName = localStorage.getItem("userName");
//     const adminStatus = localStorage.getItem("isAdminLoggedIn") === "true";
//     setIsLoggedIn(!!userName || adminStatus); // Update logged-in state
//     setIsAdmin(adminStatus); // Update admin state
//   };

//   // Initial state update on component mount
//   useEffect(() => {
//     updateLoginStates();
//   }, []);

//   // Listen for changes in localStorage and update the states
//   useEffect(() => {
//     const handleStorageChange = () => {
//       updateLoginStates();
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   // Toggle dropdown on clicking the icon
//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   // Close dropdown when clicking outside
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   // Add/remove event listener for clicking outside
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Logout handler
//   const handleLogout = () => {
//     // Clear user data (localStorage)
//     localStorage.removeItem("userName");
//     localStorage.removeItem("isAdminLoggedIn"); // Remove admin status as well
//     updateLoginStates(); // Update state immediately after logout
//     navigate("/home"); // Redirect to the home page
//     setDropdownOpen(false); // Close dropdown
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//   <Link to="/home">
//     <img src={disc} alt="Logo" />
//   </Link>
//   {/* Logo redirects to the home page */}
// </div>

//       <ul className="nav-links">
//         <li>
//           <a href="/goa-destination">About De Goa</a>
//         </li>
//         <li>
//           <a href="/experiences">Experiences</a>
//         </li>
//         <li>
//           <a href="/plan-your-trip">Plan Your Trip</a>
//         </li>
//       </ul>
//       <div className="nav-icons">
//         {/* <span className="icon">🔍</span> */}

//         {/* User Icon with Dropdown */}
//         <div className="user-icon-container" ref={dropdownRef}>
//           <span className="icon" onClick={toggleDropdown}>
//             👤
//           </span>
//           {isDropdownOpen && (
//             <div className="dropdown-menu">
//               {isLoggedIn ? (
//                 <>
//                   {/* Show Logout for logged-in users */}
//                   <button onClick={handleLogout}>Logout</button>
//                   {/* Show Admin Dashboard link for admins */}
//                   {isAdmin && (
//                     <>
//                       <button onClick={() => navigate("/admin-dashboard")}>
//                         Admin Dashboard
//                       </button>
//                       <button onClick={() => navigate("/manage-users")}>
//                         Manage Users
//                       </button>
//                       <button onClick={() => navigate("/manage-content")}>
//                         Manage Content
//                       </button>
//                       <button onClick={() => navigate("/handle-feedback")}>
//                         Handle Feedback
//                       </button>
//                     </>
//                   )}
//                 </>
//               ) : (
//                 <>
//                   {/* Show User and Admin link for non-logged-in users */}
//                   <button onClick={() => navigate("/user")}>User</button>
//                   <button onClick={() => navigate("/admin")}>Admin</button>
//                 </>
//               )}
//             </div>
//           )}
//         </div>

       
       
       
       
//         <span className="icon">☰</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import React, { useState, useEffect, useRef } from "react";
// import "./Navbar.css";
// import { useNavigate, Link } from "react-router-dom";
// import disc from "../assets/disc.jpg"; // Logo image
// import userImage from "../assets/user.jpg"; // User image

// const Navbar = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const [isAdmin, setIsAdmin] = useState(false); // Track admin status
//   const dropdownRef = useRef(null); // Reference for dropdown
//   const navigate = useNavigate();

//   // Function to update login and admin states
//   const updateLoginStates = () => {
//     const userName = localStorage.getItem("userName");
//     const adminStatus = localStorage.getItem("isAdminLoggedIn") === "true";
//     setIsLoggedIn(!!userName || adminStatus); // Update logged-in state
//     setIsAdmin(adminStatus); // Update admin state
//   };

//   // Initial state update on component mount
//   useEffect(() => {
//     updateLoginStates();
//   }, []);

//   // Listen for changes in localStorage and update the states
//   useEffect(() => {
//     const handleStorageChange = () => {
//       updateLoginStates();
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   // Toggle dropdown on clicking the icon
//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   // Close dropdown when clicking outside
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   // Add/remove event listener for clicking outside
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Logout handler
//   const handleLogout = () => {
//     // Clear user data (localStorage)
//     localStorage.removeItem("userName");
//     localStorage.removeItem("isAdminLoggedIn"); // Remove admin status as well
//     updateLoginStates(); // Update state immediately after logout
//     navigate("/home"); // Redirect to the home page
//     setDropdownOpen(false); // Close dropdown
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/home">
//           <img src={disc} alt="Logo" className="navbar-logo" />
//         </Link>
//         {/* Logo redirects to the home page */}
//       </div>

//       <ul className="nav-links">
//         <li>
//           <a href="/goa-destination">About De Goa</a>
//         </li>
//         <li>
//           <a href="/exp">Experiences</a>
//         </li>
//         <li>
//           <a href="/plan-your-trip">Plan Your Trip</a>
//         </li>
//       </ul>

//       <div className="nav-icons">
//         {/* User Icon with Dropdown */}
//         <div className="user-icon-container" ref={dropdownRef}>
//           {/* Replace the span with an img tag for the user icon */}
//           <img
//             src={userImage} // The image of the user
//             alt="User Icon"
//             className="user-icon"
//             onClick={toggleDropdown} // Keep the same functionality
//           />
//           {isDropdownOpen && (
//             <div className="dropdown-menu">
//               {isLoggedIn ? (
//                 <>
//                   {/* Show Logout for logged-in users */}
//                   <button onClick={handleLogout}>Logout</button>
//                   {/* Show Admin Dashboard link for admins */}
//                   {isAdmin && (
//                     <>
//                       <button onClick={() => navigate("/admin-dashboard")}>
//                         Admin Dashboard
//                       </button>
//                       <button onClick={() => navigate("/manage-users")}>
//                         Manage Users
//                       </button>
//                       <button onClick={() => navigate("/manage-content")}>
//                         Manage Content
//                       </button>
//                       <button onClick={() => navigate("/handle-feedback")}>
//                         Handle Feedback
//                       </button>
//                     </>
//                   )}
//                 </>
//               ) : (
//                 <>
//                   {/* Show User and Admin link for non-logged-in users */}
//                   <button onClick={() => navigate("/user")}>User</button>
//                   <button onClick={() => navigate("/admin")}>Admin</button>
//                 </>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Optional: You can add another icon here */}
//         <span className="icon">☰</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import React, { useState, useEffect, useRef } from "react";
// import "./Navbar.css";
// import { useNavigate, Link } from "react-router-dom";
// import disc from "../assets/disc.jpg"; // Logo image
// import userImage from "../assets/user.jpg"; // User image

// const Navbar = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isMenuOpen, setMenuOpen] = useState(false); // State for ☰ button
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const updateLoginStates = () => {
//     const userName = localStorage.getItem("userName");
//     const adminStatus = localStorage.getItem("isAdminLoggedIn") === "true";
//     setIsLoggedIn(!!userName || adminStatus);
//     setIsAdmin(adminStatus);
//   };

//   useEffect(() => {
//     updateLoginStates();
//   }, []);

//   useEffect(() => {
//     const handleStorageChange = () => {
//       updateLoginStates();
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userName");
//     localStorage.removeItem("isAdminLoggedIn");
//     updateLoginStates();
//     navigate("/home");
//     setDropdownOpen(false);
//   };

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/home">
//           <img src={disc} alt="Logo" className="navbar-logo" />
//         </Link>
//       </div>

//       <ul className="nav-links">
//         <li>
//           <a href="/goa-destination">About De Goa</a>
//         </li>
//         <li>
//           <a href="/exp">Experiences</a>
//         </li>
//         <li>
//           <a href="/plan-your-trip">Plan Your Trip</a>
//         </li>
//       </ul>










      

//       <div className="nav-icons">
//         <div className="user-icon-container" ref={dropdownRef}>
//           <img
//             src={userImage}
//             alt="User Icon"
//             className="user-icon"
//             onClick={toggleDropdown}
//           />
//           {isDropdownOpen && (
//             <div className="dropdown-menu">
//               {isLoggedIn ? (
//                 <>
//                   <button onClick={handleLogout}>Logout</button>
//                   {isAdmin && (
//                     <>
//                       <button onClick={() => navigate("/admin-dashboard")}>
//                         Admin Dashboard
//                       </button>
//                       <button onClick={() => navigate("/manage-users")}>
//                         Manage Users
//                       </button>
//                       <button onClick={() => navigate("/manage-content")}>
//                         Manage Content
//                       </button>
//                       <button onClick={() => navigate("/handle-feedback")}>
//                         Handle Feedback
//                       </button>
//                     </>
//                   )}
//                 </>
//               ) : (
//                 <>
//                   <button onClick={() => navigate("/user")}>User</button>
//                   <button onClick={() => navigate("/admin")}>Admin</button>
//                 </>
//               )}
//             </div>
//           )}
//         </div>

//         {/* ☰ Menu Button with Active State */}
//         <button
//           className={`icon ${isMenuOpen ? "active" : ""}`}
//           onClick={toggleMenu}
//         >
//           ☰
//         </button>

//         {/* Dropdown menu for ☰ button */}
//         {isMenuOpen && (
//           <div className="menu-dropdown">
//             <Link to="/help" onClick={() => setMenuOpen(false)}>FAQ</Link>
//             <Link to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
//             <Link to="/packagefilter" onClick={() => setMenuOpen(false)}>choose your package</Link>
            
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import disc from "../assets/disc.jpg"; // Logo image
import userImage from "../assets/user.jpg"; // User image

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const updateLoginStates = () => {
    const userName = localStorage.getItem("userName");
    const adminStatus = localStorage.getItem("isAdminLoggedIn") === "true";
    setIsLoggedIn(!!userName || adminStatus);
    setIsAdmin(adminStatus);
  };

  useEffect(() => {
    updateLoginStates();
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      updateLoginStates();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleDropdown = () => {
    console.log("User icon clicked"); // Debugging
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.className !== "user-icon"
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("isAdminLoggedIn");
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/home");
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">
          <img src={disc} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/goa-destination">About De Goa</a>
        </li>
        <li>
          <a href="/exp">Experiences</a>
        </li>
        <li>
          <a href="/plan-your-trip">Plan Your Trip</a>
        </li>
      </ul>

      <div className="nav-icons">
        <div className="user-icon-container" ref={dropdownRef}>
          <img
            src={userImage}
            alt="User Icon"
            className="user-icon"
            onClick={toggleDropdown} // Ensure this event is attached
            style={{ cursor: "pointer", zIndex: 100 }} // Extra safety
          />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {isLoggedIn ? (
                <>
                  <button onClick={handleLogout}>Logout</button>
                  {isAdmin && (
                    <>
                      <button onClick={() => navigate("/admin-dashboard")}>
                        Admin Dashboard
                      </button>
                      <button onClick={() => navigate("/manage-users")}>
                        Manage Users
                      </button>
                      <button onClick={() => navigate("/manage-content")}>
                        Manage Content
                      </button>
                      <button onClick={() => navigate("/handle-feedback")}>
                        Handle Feedback
                      </button>
                    </>
                  )}
                </>
              ) : (
                <>
                  <button onClick={() => navigate("/user")}>User</button>
                  <button onClick={() => navigate("/admin")}>Admin</button>
                </>
              )}
            </div>
          )}
        </div>

        {/* ☰ Menu Button */}
        <button
          className={`icon ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* ☰ Dropdown Menu */}
        {isMenuOpen && (
          <div className="menu-dropdown">
            <Link to="/help" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
            <Link to="/packagefilter" onClick={() => setMenuOpen(false)}>Choose Your Package</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;








