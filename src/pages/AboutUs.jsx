import React from 'react';
import { Helmet } from "react-helmet";
function blog() {
    return (
        <div className="vip-events">
            <Helmet>
                <title>About 92PKR - Trusted Color Prediction Game in Pakistan
                </title>
                <meta
                    name="description"
                    content="JLearn about 92PKR, Pakistan’s exciting color prediction game platform. Play smart, win real rewards, and enjoy secure, fast gameplay."
                />
                <meta name="keywords" content="92pkr, 92 pkr, color trading, online color trading, fast color trading" />
            </Helmet>

            {/* Section 1 - With right column */}
            <section className="section section-black">
                <div className="columns">
                    <div className="left-column col-8">
                        <h2 className="heading-with-bg">Privacy Policy</h2>
                        <p className="description">

                            <strong>Who We Are</strong>
                           <a href="https://www.92pkr.digital/">92PKR</a>  is a simple and fun color prediction game platform designed for people who enjoy fast-paced entertainment and smart guessing.

                            <br /><strong>Our Purpose  </strong>
                            We aim to give users in Pakistan an easy and exciting way to play and win, combining luck with quick decisions.

                            <br /><strong>What We Offer  </strong>
                           An easy-to-use platform where you can make predictions, enjoy the game, and earn real rewards.

                            <br /><strong>Why Choose 92PKR </strong>
                           We provide quick gameplay, secure transactions, and a fair experience for all users.

                            <br /><strong>Our Vision</strong>
                           To become a trusted online gaming space where skill meets chance in a fun and rewarding way.
                        </p>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default blog;
