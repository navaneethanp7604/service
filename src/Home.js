import React, { useState, useEffect} from "react";
import "./Home.css";
import logo from "./images/logo.png";
import image from "../src/images/mobile service.jpeg"

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1 seconds delay

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar"
      >
        <h1>
          <img src={logo} alt="TechCure Logo" className="logo" />
          TechCure
        </h1>
        <div>
          <button className="about">About</button>
          <button className="services">Services</button>
          <button className="contact">Contact</button>
          <button className="products">Products</button>
        </div>
      </nav>

      {showPopup && (
        <div
          className="login-popup" style={{ top: "100px" }}

        >
          <button onClick={() => setShowPopup(false)} className="close-btn">x</button>
          <h2>Welcome to TechCure</h2>
          <h3>"We Repair, You Relax!"</h3>
          <button className="login-btn" onClick={() => window.location.href = "/login"}>Login</button>
        </div>
      )}
      <div className="services-section">
        <h3>Fast & Reliable Mobile Repairs</h3>
        <p className="services-description">
    We specialize in quick and efficient mobile phone repairs, ensuring you get your device back in perfect condition.
  </p>
      </div>


      <footer>
        <div className="footer-links">
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
        <p className="footer-copy">© 2025 TechCure. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
