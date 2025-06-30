import React from 'react';
import './Blogs.css';
import eventImage from '../assets/4.jpg';
import eventImag from '../assets/5.jpg'; 
function Blogs() {
  return (
    <div className="vip-events">

      {/* Section 1 - With right column */}
      <section className="section section-black">
        <div className="columns">
          <div className="left-column col-8">
            <h2 className="heading-with-bg">Welcome to 92 Jeeto Pakistan – Your One-Stop Shop of Excitement and Real Cash Prizes!</h2>
            <p className="date">6/11/2024 by - <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">PKR-Game</a></p>
             <img src={eventImage} alt="Event" className="event-image" />
            <p className="description">
              You’ve come to the correct place if you’re seeking for instructions on how to sign up and create an account on Pak Games using an invite code. Creating an account should take you no more than four minutes.
            </p>
            <p className="note">NOTE: YOU MAY REGISTER DIRECTLY ON THE EMBEDDED REGISTRATION PAGE ABOVE.</p>
            <p className="description">
              To expedite the registration process, we’ve added an invitation code. Play to win thrilling prizes!
            </p>
          </div>

          <div className="right-column col-4">
            <input type="text" placeholder="Search..." className="search-bar" />
            <h3>Recent Posts</h3>
            <div className="links-row">
              <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">Welcome to 92 Jeeto Pakistan - Real Cash Prizes!</a>
              <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">Introducing Basant Club - Gaming Destination</a>
              <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">Use Pak Games Invite Code - VIP Events!</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - No right column */}
      <section className="section section-black">
        <div className="columns">
          <div className="left-column col-8">
            <h2 className="heading-with-bg">Introducing Basant Club: Pakistan’s Premier Gaming Destination</h2>
            <p className="date">19/11/2024 by - <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">PKR-Game</a></p>
            <img src="/src/assets/5.jpg" alt="Event" className="event-image" />
            <p className="description">
              Basant Club is a fascinating place in the ever-changing world of online gaming in Pakistan since it offers a large selection of games meant for the local gaming enthusiasts. Let us investigate the universe of Basant Club, looking at its origins, principles, special qualities, and many chances it presents to players all around. The Birth … Read more
            </p>
            <p className="note">NOTE: YOU MAY REGISTER DIRECTLY ON THE EMBEDDED REGISTRATION PAGE ABOVE.</p>
            <p className="description">
              To expedite the registration process, we’ve added an invitation code. Play to win thrilling prizes!
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - No right column */}
      <section className="section section-black">
        <div className="columns">
          <div className="left-column col-8">
            <h2 className="heading-with-bg">Use this Pak Games Invite Code to Join Excluse VIP Events !</h2>
            <p className="date">6/11/2024 by - <a href="https://www.92pkrs.com/#/register?invitationCode=28742968539">PKR-Game</a></p>
            <img src={eventImag} alt="Event" className="event-image" />
            <p className="description">
              You’ve come to the correct place if you’re seeking for instructions on how to sign up and create an account on Pak Games using an invite code.
              Creating an account should take you no more than four minutes.
            </p>
            <p className="note">NOTE: YOU MAY REGISTER DIRECTLY ON THE EMBEDDED REGISTRATION PAGE ABOVE.</p>
            <p className="description">
              You’ve come to the correct place if you’re seeking for instructions on how to sign up and create an account on Pak Games using an invite code. Assuming you have all the required materials handy, creating an account should take you no more than four minutes. A list of the registration steps is provided below. To expedite … Read more
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Blogs;
