
import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryImg = ({image,name}) => {
  
    return (

   <div className="CategoryImg">
     
     
          <img src={image} alt=""  />
          <div className="image-category-content">
          <p className='name'>{name}</p>
          <button className="explore"><NavLink to='' className='navlink-explore' >Explore</NavLink></button>
          </div>


   </div>

  )
}

export default CategoryImg