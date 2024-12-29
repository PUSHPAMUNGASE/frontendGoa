import React from "react";
import "./Footer.css"; // Import the CSS file for styling

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p><strong>Address:</strong> XYZ Street, Goa, India</p>
          <p><strong>Phone:</strong> +91 123 456 7890</p>
          <p><strong>Email:</strong> info@goatourist.com</p>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/experiences">Experiences</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <h4>Follow Us</h4>
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

        {/* Newsletter Subscription */}
        <div className="newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form action="#" method="POST">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="copyright">
        <p>&copy; 2024 Discover Yourself In Goa. All rights reserved.</p>
        <p>
          <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
