import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
       <div className="social-links">
        <a href="https://facebook.com"><button className="fa fa-facebook btn-link"></button></a>
        <a href="https://twitter.com"><button className="fa fa-twitter btn-link"></button></a>
        <a href="https://instagram.com"><button className="fa fa-instagram btn-link"></button ></a>
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
