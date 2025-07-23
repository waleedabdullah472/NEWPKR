import React from 'react';
import { Helmet } from "react-helmet";
function blog() {
  return (
    <div className="vip-events">
      <Helmet>
        <title>92PKR – Win Real Rewards with Color Trading
        </title>
        <meta
          name="description"
          content="Join 92PKR now. Pakistan’s rising color trading platform. Test your luck and skill to win real rewards daily."
        />
        <meta name="keywords" content="92pkr, 92 pkr, color trading, online color trading, fast color trading" />
      </Helmet>

      {/* Section 1 - With right column */}
      <section className="section section-black">
        <div className="columns">
          <div className="left-column col-8">
            <h2 className="heading-with-bg">Welcome to 92PKR.digital</h2>
            <p className="description">
              At 92PKR, we respect and protect your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website.
              <br />
              <strong>1. Information We Collect</strong>
              We may collect basic personal details like:
              - Name
              - Email address
              - Device/browser info
              - IP address
              - Game activity (for improving your experience)

              We only collect what’s necessary to provide a smooth and secure user experience.

              <br /><strong>2. How We Use Your Information</strong>
              Your information helps us:
              - Manage your account
              - Improve our services and games
              - Send updates or promotions (if you allow)
              - Ensure fair play and detect fraud

              <br /><strong>3. Cookies</strong>
              We use cookies to enhance your visit. Cookies help us remember your preferences and track basic analytics.

              You can disable cookies in your browser, but some features may not work properly.

              <br /><strong>4. Data Sharing</strong>
              We do not sell or trade your data.
              We may share it only with trusted partners (like analytics tools or payment providers) to help run the platform.

              <br /><strong>5. Security</strong>
              We use secure technologies and procedures to keep your data safe.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}

export default blog;
