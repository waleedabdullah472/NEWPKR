import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/yourchannel', '_blank');
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
      </div>
    </footer>
  );
};

export default Footer;