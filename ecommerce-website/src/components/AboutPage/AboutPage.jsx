import React from 'react';
import './aboutPage.css'; // Import the CSS file
import furniture from '../../furniture.json'

const AboutPage = () => {

  const aboutPageImage = furniture.specialPackageProducts[0].image
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <div>
        <img
          src={aboutPageImage} // Replace with the actual image path
          alt="Furniture Store"
          style={{ maxWidth: '100%', marginBottom: '20px' }}
        />
      </div>
      <p className="about-text">
        Welcome to our furniture website! We are dedicated to providing high-quality and stylish furniture
        for your home. Our mission is to make your living space more comfortable and aesthetically pleasing
        with our wide range of furniture collections.
      </p>
      <p className="about-text">
        At our furniture store, you'll find a diverse selection of furniture pieces to match your unique style.
        Whether you're looking for classic designs that exude elegance or modern pieces that embrace simplicity
        and functionality, we have something for everyone.
      </p>
      <p className="about-text">
        Our team of experienced designers and artisans work diligently to create furniture that combines
        exceptional craftsmanship with contemporary aesthetics. Each piece is carefully crafted with attention
        to detail to ensure its durability and beauty.
      </p>
      <p className="about-text">
        We believe that your home is an extension of your personality, and choosing the right furniture is
        essential to create a space that truly reflects your taste and values. Our dedicated staff is always
        here to assist you in finding the perfect pieces to transform your house into a home.
      </p>
      <p className="about-text">
        Thank you for choosing us as your furniture destination. We look forward to helping you create a
        beautiful and comfortable living space that you'll cherish for years to come.
      </p>
    </div>
  );
};

export default AboutPage;
