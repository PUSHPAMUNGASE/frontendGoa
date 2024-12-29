import React from "react";
import "./MenuContent.css"; // Add a separate CSS file for styling
import { Link } from "react-router-dom";

const MenuContent = () => {
  return (
    <div className="menu-content">
      {/* <button className="close-button">X</button> */}
      <ul className="menu-list">
       
      <li> <Link to="/">Home</Link></li>
        <li >  <Link to="/experiences">Experiences</Link></li>
        <li> <Link to="/reviews">Reviews</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
      </ul>
      <div className="social-media">
      <a href="https://facebook.com/goatourist" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com/goatourist" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://twitter.com/goatourist" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://youtube.com/goatourist" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> YouTube
          </a>
      </div>
    </div>
  );
};

export default MenuContent;

