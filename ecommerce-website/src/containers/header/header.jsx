import React, {useState} from 'react'

import './header.css'
import { NavLink,useNavigate} from 'react-router-dom'



const Header = () => {
  


  return (

    <div className="header">

      <div className="header-content">
        <h2>Exclusive Deals of Furniture Collection</h2>
        <div className="text">
        <p>Explore different categories.</p> 
         <p>Find the best deals.</p>
         </div>
        <button>Shop Now</button>
      </div>

    </div>

  )
}

export default Header