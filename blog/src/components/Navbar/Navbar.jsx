import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="wrapper">
    <nav>
       <div className="social-links">
        <a href="https://facebook.com"><button className="fa fa-facebook btn-link"></button></a>
        <a href="https://twitter.com"><button className="fa fa-twitter btn-link"></button></a>
        <a href="https://instagram.com"><button className="fa fa-instagram btn-link"></button ></a>
      </div>
    </nav>
    <div className="top-nav">
    <ul className="top-nav-ul">
      <button className="top-nav-link"><a href="/">Home</a></button>
      <button className="top-nav-link"><a href="/page">Page</a></button>   
      <button className="top-nav-link"><a href="/service">Service</a></button>
      <button className="top-nav-link"><a href="/shop">Shop</a></button>
      <button className="top-nav-link"><a href="/blog">Blog</a></button>
    </ul>
  </div>
</div>
    
  );
}

export default Navbar;
