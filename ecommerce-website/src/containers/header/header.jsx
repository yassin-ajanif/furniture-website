import React, {useState} from 'react'

import './header.css'
import { NavLink,useNavigate} from 'react-router-dom'
import Navabar from '../navbar/Navabar'


const Header = () => {
  
const navigate = useNavigate()

function goToAllProducts(){

 navigate('/allProducts')

}

  return (

    <div className="header">
       
       <Navabar/>
       
      <div className="header-content">

         
        <h2>Exclusive Deals of Furniture Collection</h2>
        <div className="text">
        <p>Explore different categories.</p> 
         <p>Find the best deals.</p>
         </div>
        <button onClick={goToAllProducts}>Shop Now</button>
      </div>

    </div>

  )
}

export default Header