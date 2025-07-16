import React from 'react';
import './ContactUs.css';
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://www.92pkrs.com/#/register?invitationCode=28742968539';
  };

  return (
    <div className="contact-us-container">
       <Helmet>
        <title>Contact 92PKR – Get Support, Ask Questions & Get Help Fast</title>
        <meta
          name="description"
          content="Need help or have questions? Contact 92PKR’s support team for quick assistance, account help, or general inquiries. We're here to support you 24/7"
        />
      </Helmet>
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
