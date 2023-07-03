import React from 'react';
import './footer.css'
const footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>Information about your company and what you do.</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="quicklink">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Info</h4>
            <p>123 Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
              <li>Product 4</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
