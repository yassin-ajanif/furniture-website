
import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'

const CategoryImg = ({image,name,link}) => {
  
 const location = useLocation();
 const isActive = location.pathname === link


    return (

   <div className={isActive ? 'activeImageCategory' : ''}>
     
     
          <img src={image} alt=""  />
          <div className="image-category-content">
          <p className='name'>{name}</p>
          <NavLink to={link} className={({isActive})=> isActive ? 'explore' : 'hideBtn'} ><p>Explore</p></NavLink>
          </div>


   </div>

  )
}

export default CategoryImg