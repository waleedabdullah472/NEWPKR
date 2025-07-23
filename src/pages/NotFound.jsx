import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Jo page aap dhoondh rahe hain, woh humari site par maujood nahi hai.</p>
      <Link to="/">Home par wapas jayein</Link>
    </div>
  );
};

export default NotFound;
