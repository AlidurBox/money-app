// src/HowItWorks.js
import React from 'react';
import phoneImage from '../images/mobiles.png';

function HowItWorks() {
  return (
<section class="how-it-works">
    <div class="container">
        <h2>How Does It Work?</h2>
        <div class="phones-showcase">
            <div class="phone-mockup">
                <img src={phoneImage} alt="Budget tracking interface showing graph and transactions"/>
            </div>
        </div>
        <div class="section-footer">
            <h3>Latest transaction history</h3>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
        </div>
    </div>
</section>
  );
}

export default HowItWorks;
