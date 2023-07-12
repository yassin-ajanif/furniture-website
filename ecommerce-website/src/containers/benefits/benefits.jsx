import React from 'react'
import './benefits.css'
import paymentMethode from './benefits-assets/payment methode.png'
import returnPolicy from './benefits-assets/return policy.png'
import customerSupport from './benefits-assets/customer support.png'

const Benefits = () => {

  return (

    <div className="benefits">

        <h2 className="title">Benefits for your expediency</h2>

        <div className="benefits-options">

          <div className="payment-methode">
          <div className="container">
            <img src={paymentMethode} alt="" />
            </div>
            <h3>Payment method</h3>
            <p>We offer flexible payment options, to make easier.</p>
          </div>

          <div className="return-policy">
          <div className="container">
           <img src={returnPolicy} alt="" />
          </div>
            <h3>Return Policy</h3>
            <p>You can return a product within 30 days.</p>
          </div>

          <div className="customer-support">
           <div className="container">
            <img src={customerSupport} alt="" />
          </div>
            <h3>Customer Support</h3>
            <p>Our customer support is 24/7.</p>
          </div>
        </div>
    </div>
  )
}

export default Benefits