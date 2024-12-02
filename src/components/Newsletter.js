// components/Newsletter.js
import React, { useState } from 'react';
import bell from '../images/bell.png';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert('Thank you for subscribing!');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  // Enhanced email validation
  const validateEmail = (email) => {
    // RFC 5322 official email regex
    const emailRegex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z-]*[a-zA-Z]:[^\]]+)\]))$/;
    return emailRegex.test(email);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-border">
      <div className="newsletter-content">
        <img src={bell} alt="Notification Icon" className="newsletter-icon" />
        <p1 className="newsletter-text">Subscribe to our newsletter to stay informed about the latest updates</p1>
      </div>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          className="newsletter-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
      </div>
    </section>
  );
}

export default Newsletter;
