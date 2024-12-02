// src/TransferSection.js
import React from 'react';
import budgetImage from '../images/1.png';

function TransferSection() {
  return (
<section class="transfer-section">
    <div class="container">
        <div class="transfer-content">
            <div class="transfer-text">
                <h2>Make your money transfer simple and clear</h2>
                <ul class="features-list">
                    <li>
                        <svg viewBox="0 0 24 24" class="check-icon">
                            <path d="M20 6L9 17L4 12" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Banking transactions are free for you
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" class="check-icon">
                            <path d="M20 6L9 17L4 12" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        No monthly cash commission
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" class="check-icon">
                            <path d="M20 6L9 17L4 12" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Manage payments and transactions online
                    </li>
                </ul>
                <a href="#" class="learn-more">Learn more →</a>
            </div>
            <div class="transfer-images">
                <img src={budgetImage} alt="Budget interface" class="main-interface"/>
            </div>
        </div>
    </div>
</section>
  );
}

export default TransferSection;
