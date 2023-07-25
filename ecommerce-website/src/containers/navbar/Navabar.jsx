import React, {useState} from 'react'
import MobileMenu from '../header/header-assets/mobileMenu.png'
import logo from '../header/header-assets/logo.png'
import search from '../header/header-assets/search.png'
import card from '../header/header-assets/card.png'
import member from '../header/header-assets/member.png'
import { NavLink,useNavigate, useSearchParams} from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'


const Navabar = () => {
    
    const [showMobileLinks,setShowMobileLinks]=useState(false)
    const navigate = useNavigate()
    const pickedProducts = useSelector(state=>state.yourCard.addedProducts)
    const youPickedProducts = pickedProducts.length>0
    const filtredPickedProducts = 

   pickedProducts.filter(
    
(product,index)=>pickedProducts.findIndex(object=>object.productName===product.productName)===index

   )

   const numberOfFiltredProducts = filtredPickedProducts.length

    function openYourCart (){
  
      navigate('/shoppingCard')
    }
    
    function displayMobileLinks(){

       setShowMobileLinks(true);
       // Disable scrolling for the entire page
     document.body.style.overflow = 'hidden';

    }

    function closeMobileLinks(){

      setShowMobileLinks(false);
     document.body.style.overflow = 'auto';

    }
  

  return (

    <nav className="navbar">

    <div className="menu-mobile" onClick={displayMobileLinks}><img src={MobileMenu}/></div>
    <div className="logo"><img src={logo} alt="" /></div>

    {showMobileLinks && <div className="Mobile-menu">
    <NavLink to='/' className={({ isActive}) => isActive ? "style-link-mobile" : ""} >Home</NavLink>
      <NavLink to='/allProducts' className={({ isActive}) => isActive ? "style-link-mobile" : ""}>Products</NavLink>
      <NavLink to=''className={({ isActive}) => isActive ? "style-link-mobile" : ""}>Categories</NavLink>
      <NavLink to='/aboutPage' className={({ isActive}) => isActive ? "style-link-mobile" : ""}>About</NavLink>
      <NavLink to='/contactUs'className={({ isActive}) => isActive ? "style-link-mobile" : ""}>Contact us</NavLink>
      <div className='close' onClick={closeMobileLinks}>X</div>
    </div>}

    <div className="desktop-menu">
      <NavLink to='/' className={({ isActive}) => isActive ? "style-link" : ""} >Home</NavLink>
      <NavLink to='/allProducts' className={({ isActive}) => isActive ? "style-link" : ""}>Products</NavLink>
      <NavLink to=''className={({ isActive}) => isActive ? "style-link" : ""}>Categories</NavLink>
      <NavLink to='/aboutPage' className={({ isActive}) => isActive ? "style-link" : ""}>About</NavLink>
      <NavLink to='/contactUs'className={({ isActive}) => isActive ? "style-link" : ""}>Contact us</NavLink>
    </div>

   <div className="right-icons">
    <div className="search"><img src={search} alt="" /></div>
    <div className="card" onClick={openYourCart}><img src={card}/></div>
    {youPickedProducts ? <div>{numberOfFiltredProducts}</div> : ''}
    <div className="member"><img src={member} alt="" /></div>
    </div>

</nav>

  )
}

export default Navabar