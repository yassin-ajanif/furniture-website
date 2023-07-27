import React from 'react'
import logo from './footer-assets/logo.png'
import socialMedia from './footer-assets/social.png'
import './footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()
  
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
         <p onClick={()=>navigate('/allProducts')} >All Products</p>
         <p onClick={()=>navigate('/Bedrooms')} >Bedroom</p>
         <p onClick={()=>navigate('/DinningRooms')} >Dinning Room</p>
        </div></div>
        








        <div className="MyAccount">
        <div className="MyAccount-title">My Account</div>
        <div className="MyAccount-group">
         <p >Sign in</p>
         <p>Register</p>
         <p onClick={()=>navigate('/orderStatus')}>Order status</p>
        </div>
        </div>

      </div>

      <div className="third-group">
      <div className="help">
      <div className="help-title">Help</div>
        <div className="help-group">
         <p onClick={()=>navigate('/shippingDelivery')}>Shipping</p>
         <p onClick={()=>navigate('/return')}>Return</p>
         <p onClick={()=>navigate('/sizing')}>Sizing</p>
        </div>
        </div>
        
        <div className="legalStuff">
        <div className="legalStuff-title">Legal stuff</div>
        <div className="legalStuff-group">
         <p onClick={()=>navigate('/shippingDelivery')}>Shipping & Delivery</p>
         <p onClick={()=>navigate('/termsAndConditions')}>Terms  & Conditions</p>
         <p onClick={()=>navigate('/privacyPolicy')}>Privacy & Policy</p>
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