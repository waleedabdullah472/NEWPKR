import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; // Optional: use for header-specific styles
import Logo from '../assets/logo.webp';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Top Header Buttons */}
      <header className="header">
        <a
          href="https://www.92pkrs.com/#/register?invitationCode=28742968539"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Register
        </a>
        <a
          href="https://www.92pkrs.com/#/register?invitationCode=28742968539"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Login
        </a>
      </header>

      {/* Navigation Section */}
      <div className="nav-section">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-img" />
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>


        {/* Navigation Links - Desktop */}
        <div className="nav-options">
          <a
            href="https://www.92pkrs.com/#/register?invitationCode=28742968539"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIP Events
          </a>
          <a
            href="https://www.92pkrs.com/#/register?invitationCode=28742968539"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Invite Code
          </a>

          <Link to="/blogs">Blogs</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>


        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a
            href="https://www.92pkrs.com/#/register?invitationCode=28742968539"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            VIP Events
          </a>
          <a
            href="https://www.92pkrs.com/#/register?invitationCode=28742968539"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            Official Invite Code
          </a>
          <Link to="/blogs" onClick={toggleMobileMenu}>Blogs</Link>
          <Link to="/contact-us" onClick={toggleMobileMenu}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;