// src/Features.js
import React from 'react';
import logos from '../images/logos.png';
import asd from '../images/123.png';
import armor from '../images/armor.png';
import bank from '../images/bank.png';
import happy from '../images/happy.png';
import money from '../images/money.png';
import wallet from '../images/wallet.png';
import chat from '../images/chat.png';


function Features() {
  const featureList = [
    { title: "Easy Payments", description: "Id mollis consectetur...", icon: "images/bank.png" },
    { title: "Data Security", description: "Augue pulvinar justo...", icon: "images/armor.png" },
    { title: "Cost Statistics", description: "Mattis urna ultricies...", icon: "images/money.png" },
    { title: "Support 24/7", description: "A elementum, imperdiet...", icon: "images/chat.png" },
    { title: "Regular Cashback", description: "Sit facilisis dolor...", icon: "images/wallet.png" },
    { title: "Top Standards", description: "Faucibus cursus...", icon: "images/happy.png" },
  ];

  return (
    <section class="features">
        <div class="partners-grid">
        <img src={logos} alt="Partner Logo" class="partner-logo"/>
    </div>
    <div class="features-container">
        <div class="features-image">
            <img src={asd} alt="Banking App Interface"/>
        </div>
  <div class="features-container">
                    <div class="features-image">
                        <img src={asd} alt="Banking App Interface"/>
                    </div>
                    <div class="features-content">
                        <h2>App Features</h2>
                        <p class="features-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
                        </p>
                        
                        <div class="features-grid">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <img src={bank} alt="Easy Payments Icon"/>
                                </div>
                                <div class="feature-text">
                                    <h3>Easy Payments</h3>
                                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                                </div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <img src={armor} alt="Data Security Icon"/>
                                </div>
                                <div class="feature-text">
                                    <h3>Data Security</h3>
                                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                                </div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <img src={money} alt="Cost Statistics Icon"/>
                                </div>
                                <div class="feature-text">
                                    <h3>Cost Statistics</h3>
                                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                                </div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <img src={chat} alt="Support 24/7 Icon"/>
                                </div>
                                <div class="feature-text">
                                    <h3>Support 24/7</h3>
                                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                                </div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <img src={wallet} alt="Regular Cashback Icon"/>
                                </div>
                                <div class="feature-text">
                                    <h3>Regular Cashback</h3>
                                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                                </div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <img src={happy} alt="Top Standards Icon"/>
                                </div>
                                <div class="feature-text">
                                    <h3>Top Standards</h3>
                                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
  );
}

export default Features;
