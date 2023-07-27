import React from 'react';
import './return.css'; // Import the CSS file for styling

const Returns = () => {
  return (
    <div className="returns-container">
      <h1>Returns and Refunds</h1>
      <p>
        We want you to be fully satisfied with your purchase. If for any reason
        you are not satisfied, we offer a hassle-free return and refund policy.
      </p>
      <h2>Return Eligibility</h2>
      <p>
        To be eligible for a return, please make sure that the item is in its
        original condition, unused, and in its original packaging.
      </p>
      <h2>Return Process</h2>
      <p>
        If you wish to return an item, please contact our customer support
        within 30 days of receiving the order. Our team will guide you through
        the return process and provide you with a return shipping label.
      </p>
      <h2>Refunds</h2>
      <p>
        Once we receive the returned item and inspect its condition, we will
        process your refund. Please allow [X] business days for the refund to
        appear in your original payment method.
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default Returns;
