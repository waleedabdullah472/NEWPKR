import React from 'react';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/Pro_fessor57', '_blank');
  };
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/earning.sphere?igsh=MXI0ZnppOXAwaGtoeg==', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/share/1A4dPzKdT9/', '_blank');
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <span className="tax-text">© 2025 92PKR-Game</span>
        <div
          className="telegram-icon-wrapper"
          onClick={handleTelegramClick}
          aria-label="Join us on Telegram"
        >
          <FaTelegram className="telegram-icon" />
        </div>
        <div
          className="telegram-icon-wrapper"
          onClick={handleInstagramClick}
          aria-label="Follow us on Instagram"
        >
          <FaInstagram className="instagram-icon" />
        </div>
        <div
          className="telegram-icon-wrapper"
          onClick={handleFacebookClick}
          aria-label="Follow us on Facebook"
        >
          <FaFacebook className="facebook-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
