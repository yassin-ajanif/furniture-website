import React from 'react'
import logo from './footer-assets/logo.png'
import socialMedia from './footer-assets/social.png'
import './footer.css'

const Footer = () => {
  
  return (

    <div className="footer-container">
    
    <div className="footer">


      <div className="first-group">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="social">
          <img src={socialMedia} alt="" />
          </div>
        <div className="address-title">Address</div>
        <div className="address">
          +123 654 987<br />
          877  The Bronx, NY<br />
          14568, USA</div>
        
      </div>

      <div className="second-group">

        <div className="shop">
        <div className="shop-title">Shop</div>
        <div className="shop-group">
         <p>All Products</p>
         <p>Bedroom</p>
         <p>Dinning Room</p>
        </div></div>
        
        <div className="MyAccount">
        <div className="MyAccount-title">My Account</div>
        <div className="MyAccount-group">
         <p>Sign in</p>
         <p>Register</p>
         <p>Order status</p>
        </div>
        </div>

      </div>

      <div className="third-group">
      <div className="help">
      <div className="help-title">Help</div>
        <div className="help-group">
         <p>Shipping</p>
         <p>Return</p>
         <p>Sizing</p>
        </div>
        </div>
        
        <div className="legalStuff">
        <div className="legalStuff-title">Legal stuff</div>
        <div className="legalStuff-group">
         <p>Shipping & Delivery</p>
         <p>Terms  & Conditions</p>
         <p>Privacy & Policy</p>
         </div>
</div>
      </div>

     

    </div>

    <div className="copyright-group">
       Copyright ©2020 INWOOD. All Rights Reserved.
       </div>

    </div>

  )
}

export default Footer