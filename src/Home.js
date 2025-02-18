// eslint-disable-next-line no-unused-vars
import React from "react";
import './Home.css';
import logo from './images/logo.png'

const Home = () => {
    return(
        <nav  className="navbar">
            <header>
            <img src={logo} alt="Navan Mobile Logo" className="logo" />
                service
            </header>
            <div>
                <button className="about">about</button>
                <button className="services">services</button>
                <button className="contact">contact</button>
                <button className="products">products</button>
            </div>
        </nav>
    );
};

export default Home;
