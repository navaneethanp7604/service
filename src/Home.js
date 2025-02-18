// eslint-disable-next-line no-unused-vars
import React from "react";
import './Home.css';
import logo from './images/logo.png'

const Home = () => {
    return(
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
    );
};

export default Home;
