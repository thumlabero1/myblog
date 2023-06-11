import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
      <div className="social-links">
        <a href="https://facebook.com"><i className="fas fa-facebook">gg</i></a>
        <a href="https://twitter.com"><i className="fas fa-twitter">gg</i></a>
        <a href="https://instagram.com"><i className="fas fa-instagram">gg</i></a>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/page">Page</a></li>   
        <li><a href="/service">Service</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
