import React from 'react'
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaHome, FaImages, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:pictures@best.com">
              plant@best.com
            </a>
          </p>
          <p>Phone: +919108487617</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
      <li>
        <a href="/">
          <FaHome /> Home
        </a>
      </li>
      <li>
        <a href="/products">
          <FaImages /> Pictures
        </a>
      </li>
      <li>
        <a href="/about">
          <FaInfoCircle /> About
        </a>
      </li>
      <li>
        <a href="/contact">
          <FaQuestionCircle /> Help
        </a>
      </li>
    </ul>
        </div>

        

<div className="footer-section">
      <h4>Get in touch</h4>
      <div className="social-icons">
        <a href="#" className="icon"><FaFacebook /></a>
        <a href="#" className="icon"><FaTwitter /></a>
        <a href="#" className="icon"><FaInstagram /></a>
      </div>
      <div className="subscribe-section">
        <input type="email" placeholder="Enter your email" />
        <button type="button" className="btn1">Subscribe</button>
      </div>
    </div>
      </div>
      <div className="footer-bottom">
    <p>Discover endless possibilities with our curated collection of captivating plants. &copy; 2024. All rights reserved.</p>
    </div>

    </footer>
  );
};

export default Footer;