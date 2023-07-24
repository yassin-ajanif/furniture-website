import React from 'react'
import MobileMenu from '../header/header-assets/mobileMenu.png'
import logo from '../header/header-assets/logo.png'
import search from '../header/header-assets/search.png'
import card from '../header/header-assets/card.png'
import member from '../header/header-assets/member.png'
import { NavLink,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'


const Navabar = () => {

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

  

  return (

    <nav className="navbar">

    <div className="menu-mobile"><img src={MobileMenu}/></div>
    <div className="logo"><img src={logo} alt="" /></div>

    <div className="desktop-menu">
      <NavLink to='/' className={({ isActive}) => isActive ? "style-link" : ""} >Home</NavLink>
      <NavLink to='/' >Products</NavLink>
      <NavLink to=''className="categories">Categories</NavLink>
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