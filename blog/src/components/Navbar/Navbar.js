import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
       <div className="social-links">
        <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
        <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
      </div>
      <div className="top-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/page">Page</a></li>   
          <li><a href="/service">Service</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
     
    </nav>
  );
}

export default Navbar;
