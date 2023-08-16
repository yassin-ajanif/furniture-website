import React from 'react';
import './privacyPolicy.css'; // Import the CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        Welcome to <strong>InWood ecommerce website!</strong> We are committed to protecting your
        privacy and safeguarding your personal information. This Privacy Policy
        outlines how we collect, use, and handle your personal data when you use
        our website and services.
      </p>
      <h2>Information We Collect</h2>
      <ol>
        <li>
          <strong>Personal Information:</strong> When you visit our website, we
          may collect certain personal information you provide voluntarily,
          such as your name, email address, and phone number when you fill out
          contact forms or subscribe to our newsletters.
        </li>
        <li>
          <strong>Usage Information:</strong> We may collect non-personal
          information about your interactions with our website, including your
          IP address, browser type, operating system, referring URLs, and pages
          visited.
        </li>
        <li>
          <strong>Cookies and Similar Technologies:</strong> We use cookies and
          similar technologies to enhance your experience and improve our
          services. These technologies collect data about your browsing
          behavior, but do not personally identify you.
        </li>
      </ol>
      
    </div>
  );
};

export default PrivacyPolicy;
