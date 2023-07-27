
import React from 'react';
import './shippingDelivery.css'; // Import the CSS file for styling

const ShippingDelivery = () => {
  return (
    <div className="shipping-delivery-container">
      <h1>Shipping and Delivery</h1>
      <p>
        Thank you for shopping with us! Here's some important information about
        our shipping and delivery process.
      </p>
      <h2>Shipping Options</h2>
      <p>
        We offer various shipping options to meet your delivery needs. During
        the checkout process, you can select your preferred shipping method,
        including standard, express, or overnight delivery.
      </p>
      <h2>Delivery Time</h2>
      <p>
        The delivery time depends on your location and the chosen shipping
        method. Standard shipping typically takes 3 business days, while
        express and overnight options are available for faster delivery.
      </p>
      <h2>Tracking Your Order</h2>
      <p>
        Once your order is shipped, we'll provide you with a tracking number so
        you can monitor your package's journey and know when it will arrive.
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default ShippingDelivery;
