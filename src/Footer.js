import React from "react";

const Footer = ()=>{
    return(
        <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Website</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          {/* Add more links or modify them as needed */}
        </ul>
      </div>
    </footer>
    );
}
export default Footer;