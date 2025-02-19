// eslint-disable-next-line no-unused-vars
import React from "react";
import './Home.css';
import logo from './images/logo.png'

const Home = () => {
    return(
        <>
        <nav  className="navbar">
            <h1>
            <img src={logo} alt="Navan Mobile Logo" className="logo" />
                TechCure
            </h1>
            <div>
                <button className="about">About</button>
                <button className="services">Services</button>
                <button className="contact">Contact</button>
                <button className="products">Products</button>
            </div>
        </nav>
<footer>
  <div className="footer-container">
    <div className="footer-logo">
      <img src="logo.png" alt="TechCure Logo" />
      <h2>TechCure</h2>
    </div>

  <div className="footer-social">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
    </a>
 </div>


  </div>

  <p className="footer-copy">© 2025 TechCure. All rights reserved.</p>
</footer>

        
        </>
    );
};

export default Home;
