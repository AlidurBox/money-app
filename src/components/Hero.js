// src/Hero.js
import React from 'react';
import appstore from '../images/appstore.png';
import image from '../images/image.png';
import googleplay from '../images/googleplay.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Manage All Your Money in One App</h1>
        <p>We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
        <div className="app-links">
          <a href="#"><img src={appstore}  alt="Download on App Store" /></a>
          <a href="#"><img src={googleplay} alt="Get it on Google Play" /></a>
        </div>
        <a href="#" className="discover-more">
          <span className="down-icon">▼</span> Discover more
        </a>
      </div>
      <div className="hero-image">
        <img src={image} alt="App Interface" />
      </div>
    </section>
  );
}

export default Hero;
