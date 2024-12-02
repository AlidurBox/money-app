// components/PaymentSection.js
import React from 'react';
import paymentImage from '../images/2.png';
import wallet from '../images/wallet.png';
import bank from '../images/bank.png';

function PaymentSection() {
  return (
<section class="payment-section">
    <div class="container">
        <div class="payment-content">
            <div class="payment-images">
                <img src={paymentImage} alt="Contacts list interface" class="main-interface"/>
            </div>
            <div class="payment-text">
                <h2>Receive payment from international bank details</h2>
                <div class="payment-features">
                    <div class="payment-feature">
                        <div class="feature-icon">
                            <img src={bank} alt="Payment icon"/>
                        </div>
                        <div class="feature-text">
                            <h3>Manage your payments online</h3>
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>
                    </div>
                    <div class="payment-feature">
                        <div class="feature-icon">
                            <img src={wallet} alt="Wallet icon"/>
                        </div>
                        <div class="feature-text">
                            <h3>A elementur and imperdiet enim</h3>
                            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                    </div>
                </div>
                <a href="#" class="learn-more">Learn more →</a>
            </div>
        </div>
    </div>
</section>
  );
}

export default PaymentSection;
