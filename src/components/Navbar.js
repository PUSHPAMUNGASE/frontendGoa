


import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import disc from "../assets/disc.jpg"; // Logo image
import userImage from "../assets/user.jpg"; // User image
import goalogo from "../assets/goalogo.jpg";

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
          {/* <img src={goalogo} alt="Logo" className="navbar-logo" /> */}
          <h3><i>Goa Globe</i></h3>
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
            <Link to="/foodsection" onClick={()=>setMenuOpen(false)}>FoodSection
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;








