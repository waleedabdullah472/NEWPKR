import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://www.92pkrs.com/#/register?invitationCode=28742968539';
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      <div className="contact-info-box">
        <h2>Get in Touch</h2>
        
        {/* Phone number link */}
        <p>
          <strong>Contact Number:</strong>{' '}
          <a href="tel:+923046665611" style={{ color: '#0af', textDecoration: 'underline' }}>
            +92 304 6665611
          </a>
        </p>

        {/* Email link */}
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:Mistekerjin@gmail.com" style={{ color: '#0af', textDecoration: 'underline' }}>
            Mistekerjin@gmail.com
          </a>
        </p>

        {/* Register button */}
        <button className="register-btn" onClick={handleRegisterClick}>
          Register Now on 92PKR Game
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
