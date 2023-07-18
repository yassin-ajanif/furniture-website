import React, {useState} from 'react'
import MobileMenu from './header-assets/mobileMenu.png'
import logo from './header-assets/logo.png'
import search from './header-assets/search.png'
import card from './header-assets/card.png'
import member from './header-assets/member.png'
import './header.css'
import { NavLink,useNavigate} from 'react-router-dom'



const Header = () => {
  
 const navigate = useNavigate()

  function openYourCart (){

    navigate('/shoppingCard')
  }

  return (

    <div className="header">

      <nav className="navbar">

        <div className="menu-mobile"><img src={MobileMenu}/></div>
        <div className="logo"><img src={logo} alt="" /></div>

        <div className="desktop-menu">
          <NavLink to='/' className={({ isActive}) => isActive ? "style-link" : ""} >Home</NavLink>
          <NavLink to='/' >Products</NavLink>
          <NavLink to=''className="categories">Categories</NavLink>
          <NavLink to=''className="about">About</NavLink>
  <NavLink to=''className="contact-us">Contact us</NavLink>
        </div>
       <div className="right-icons">
        <div className="search"><img src={search} alt="" /></div>
        <div className="card" onClick={openYourCart}><img src={card}/></div>
        <div className="member"><img src={member} alt="" /></div>
        </div>

      </nav>

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