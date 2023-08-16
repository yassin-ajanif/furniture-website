import React from 'react'
import furniture from '../../furniture.json'
import './newsletter.css'

const Newsletter = () => {

  return (

    <div className="newsletter">

     <div className="image">
      <img src={furniture.specialPackageProducts[0].image} alt="" />
     </div>

     <div className="content">
      <h2>Join our <strong>Newsletter</strong> </h2>
      <p>Receive exclusive deals, discounts and many offers.</p>
      <input type="text" placeholder='Enter your email'/>
      <button><span>Subscribe</span></button>
     </div>

    </div>

  )
}

export default Newsletter