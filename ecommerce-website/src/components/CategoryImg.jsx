
import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'

const CategoryImg = ({image,name,link}) => {
  
 
 


    return (

   <div >
     
          <img src={image} alt=""  />
          <div className="image-category-content">
          <p className='name'>{name}</p>
          </div>

   </div>

  )
}

export default CategoryImg