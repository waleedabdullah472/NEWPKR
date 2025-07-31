import React from 'react';
import './VIPEvents.css';
import firstImage from '../assets/first.jpg';
import secondImage from '../assets/second.jpg';
function VIPEvents() {
  return (
    <div className="vip-events">

      {/* Section 1 */}
      <section className="section section-black">
        <div className="columns">
          <div className="left-column col-8">
             <h1 className="heading-with-bg">92PKR</h1>
             <p>92PKR Digital is a real earning game in Pakistan. Users can play and earn money daily. It offers fun task and quick payouts</p>
            <h2 className="heading-with-bg">Use this 92PKR-Game Invite Code to Join Exclusive VIP Events!</h2>
            <p className="date">19/11/2024 by - <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539"> 92PKR-Game</a></p>
           
             <img src={firstImage} alt="92pkr" className="event-image" />
            <p className="description">You’ve come to the correct place if you’re seeking for instructions on how to sign up and create an account on Pak Games using an invite code. Assuming you have all the <a href="https://www.92pkr.digital/AboutUs">required materials handy</a>, creating an account should take you no more than four minutes. A list of the registration steps is provided below.</p>
            <p className="note">NOTE: YOU MAY REGISTER DIRECTLY ON THE EMBEDDED REGISTRATION PAGE ABOVE.</p>
            <p className="description">To expedite the registration process, we’ve added an invitation code in addition to an embedded registration form. Play to win thrilling prizes after enjoying a leisurely <a href="https://www.92pkr.digital/blogs">read </a>through of the instructions.</p>
          </div>
          <div className="right-column col-4">
            <input type="text" placeholder="Search..." className="search-bar" />
            <h3>Recent Posts</h3>
            <div className="links-row">
              <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">Welcome to 92PKR-GamePakistan <br /> Your One-Stop Shop of Excitement and Real Cash Prizes!</a>
              <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">Introducing Basant Club <br /> Pakistan’s Premier Gaming Destination</a>
              <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">Use this 92PKR-Game Invite Code to<br /> Join Exclusive VIP Events!</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section">
        <h2 className="heading-with-bg">1. Search for and paste a 92PKR-Game INVITE CODE into your web browser.</h2>
        <p className="description">• • To view the 92PKR-Game website, use a desktop or mobile browser. You will be taken to the Pak Games registration page.</p>
        <p className="description">• NOTE: You’ll notice that the Invite Code field already has an invite code entered. Just prepare your password and phone number beforehand.</p>
        <p className="description">• • Fill out the registration form on the registration page or by clicking the registration link above.</p>
        <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">
          <button className="register-button">Register Now with Invitation Code</button>
        </a>
      </section>

      {/* Section 3 */}
      <section className="section">
        <h2 className="heading-with-bg">2. Enter your phone number, (+91), select a strong password.</h2>
        
        <img src={secondImage} alt="92pkr" className="highlight-image" />
      </section>

      {/* Section 4 */}
      <section className="section">
        <h2 className="heading-with-bg">3. Make sure your password is robust and contains a variety of characters.</h2>
        <p className="description">• • Select a strong password with a minimum length of eight characters that combines lowercase, capital, and symbol characters.</p>
        <p className="description">• • Avoid using easy passwords like “qwerty” or “abc12345.”</p>
        <p className="description">• • Either commit this password to memory or securely save it in a password management application</p>
      </section>

      {/* Section 5 */}
      <section className="section">
        <h2 className="heading-with-bg">4. Enter the invite code for 92PKR-Game(USE OUR INVITE CODE)</h2>
        <p className="invitation-code">INVITE CODE : 28742968539</p>
        <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539" className="register-link">Register Now</a>
        <p className="description">• Enter your Registered account number (+92) on 92PKR-Game</p>
        <p className="description">• Enter your Password, please to know that your registered account must be at least Lowercase and Uppercase letter along with numbers</p>
        <p className="description">• Press Log in to Proceed login to your 92PKR-Game Account</p>
      </section>

      {/* Section 6 */}
      <section className="section">
        <h2 className="heading-with-bg">FACING PROBLEM ?</h2>
        <p className="description">To get in touch with our customer support, click the icon below. We’ll do all in our power to help you resolve your problems.</p>
        <a href="https://www.92pkr.digital/contact-us" className="contact-link">Contact Customer Service</a>
        <div className="club-intro">
          <p className="description">We proudly introduce VIP clubs across Pakistan for elite entertainment and luxury experiences.</p>
          <p className="description">Each club offers a unique environment for networking, enjoyment, and exclusive member activities.</p>
        </div>
        <div className="comment-section">
          <h3>Leave a Comment</h3>
          <textarea placeholder="Your Comment"></textarea>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Website" />
          <button className="comment-button">Post Comment</button>
        </div>
      </section>

    </div>
  );
}

export default VIPEvents;
