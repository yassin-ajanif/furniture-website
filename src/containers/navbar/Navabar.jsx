import React, {useState} from 'react'
import MobileMenu from '../header/header-assets/mobileMenu.png'
import logo from '../header/header-assets/Logo.png'
import search from '../header/header-assets/search.png'
import card from '../header/header-assets/card.png'
import member from '../header/header-assets/member.png'
import { NavLink,useNavigate, useSearchParams} from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'


const Navabar = () => {
    
    const [showMobileLinks,setShowMobileLinks]=useState(false)
    const [showCategoryLinks,setshowCategoryLinks]=useState(false)

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

    function displayCategoryLinks (){

      setshowCategoryLinks(true)
      console.log('hover')
    }

    function hideCategoryLinks(){

      setshowCategoryLinks(false)
      

    }

    function closeMobileLinksANDhideCategoryLinks(){

      hideCategoryLinks(); closeMobileLinks()
    }
  

  return (

    <nav className="navbar">

    <div className="menu-mobile" onClick={displayMobileLinks}><img src={MobileMenu}/></div>
    <div className="logo"><img src={logo} alt="" /></div>

    {showMobileLinks && <div className="Mobile-menu">
    <NavLink to='/' className={({ isActive}) => isActive ? "style-link-mobile" : ""}  onClick={closeMobileLinks} >Home</NavLink>
      <NavLink to='/allProducts' className={({ isActive}) => isActive ? "style-link-mobile" : ""} onClick={closeMobileLinks}>Products</NavLink>
      
     

      <div className="category-container" onMouseLeave={hideCategoryLinks} onMouseOver={displayCategoryLinks}>
      <div style={{textDecoration: 'underline'}}>Categories</div>
     { showCategoryLinks && <div className="categories">
        <NavLink to='/Bedrooms' className={({ isActive}) => isActive ? "style-link-mobile" : "style-link-disable"}onClick={closeMobileLinksANDhideCategoryLinks} >Bedrooms</NavLink>
        <NavLink to='/DinningRooms' className={({ isActive}) => isActive ? "style-link-mobile" : "style-link-disable"}onClick={closeMobileLinksANDhideCategoryLinks} >Dinning Room</NavLink>
        <NavLink to='/LivingRooms' className={({ isActive}) => isActive ? "style-link-mobile" : "style-link-disable"} onClick={closeMobileLinksANDhideCategoryLinks}>Meeting Room</NavLink>
        <NavLink to='/MeetingRooms' className={({ isActive}) => isActive ? "style-link-mobile" : "style-link-disable"}onClick={closeMobileLinksANDhideCategoryLinks} >Workspace</NavLink>
        <NavLink to='/RoomKitchens' className={({ isActive}) => isActive ? "style-link-mobile" : "style-link-disable"}onClick={closeMobileLinksANDhideCategoryLinks} >Living Room</NavLink>
        <NavLink to='/Workspaces' className={({ isActive}) => isActive ? "style-link-mobile" : "style-link-disable"}onClick={closeMobileLinksANDhideCategoryLinks} >Kitchen Room</NavLink>
      </div> }
      </div>


      <NavLink to='/aboutPage' className={({ isActive}) => isActive ? "style-link-mobile" : ""}onClick={closeMobileLinks}>About</NavLink>
      <NavLink to='/contactUs'className={({ isActive}) => isActive ? "style-link-mobile" : ""}onClick={closeMobileLinks}>Contact us</NavLink>
      <div className='close' onClick={closeMobileLinks}>X</div>
    </div>}

    <div className="desktop-menu">
      <NavLink to='/' className={({ isActive}) => isActive ? "style-link" : ""} >Home</NavLink>
      <NavLink to='/allProducts' className={({ isActive}) => isActive ? "style-link" : ""}>Products</NavLink>
 <div className="category-container" onMouseLeave={hideCategoryLinks} onMouseOver={displayCategoryLinks}>
      <div >Categories</div>
     { showCategoryLinks && <div className="categories">
        <NavLink to='/Bedrooms' className={({ isActive}) => isActive ? "style-link" : "style-link-disable"} >Bedrooms</NavLink>
        <NavLink to='/DinningRooms' className={({ isActive}) => isActive ? "style-link" : "style-link-disable"} >Dinning Room</NavLink>
        <NavLink to='/LivingRooms' className={({ isActive}) => isActive ? "style-link" : "style-link-disable"} >Meeting Room</NavLink>
        <NavLink to='/MeetingRooms' className={({ isActive}) => isActive ? "style-link" : "style-link-disable"} >Workspace</NavLink>
        <NavLink to='/RoomKitchens' className={({ isActive}) => isActive ? "style-link" : "style-link-disable"} >Living Room</NavLink>
        <NavLink to='/Workspaces' className={({ isActive}) => isActive ? "style-link" : "style-link-disable"} >Kitchen Room</NavLink>
      </div> }
</div>

      <NavLink to='/aboutPage' className={({ isActive}) => isActive ? "style-link" : ""}>About</NavLink>
      <NavLink to='/contactUs'className={({ isActive}) => isActive ? "style-link" : ""}>Contact us</NavLink>
    </div>

   <div className="right-icons">
   
    <div className="card" onClick={openYourCart}>
      <img src={card}/>
    {youPickedProducts && 
  <div className='numberOfPickedProducts'>{numberOfFiltredProducts}</div>
     }
    </div>
    
    <div className="member"><img src={member} /></div>
    </div>

</nav>

  )
}

export default Navabar