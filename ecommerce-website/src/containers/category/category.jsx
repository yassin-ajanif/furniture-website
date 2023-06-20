import React from 'react'
import mobileIcon from '../header/header-assets/mobileMenu.png'
import searchIcon from '../category/category-assets/search.png'
import './category.css'
import arrow from '../category/category-assets/arrow-right.png'
import {NavLink} from 'react-router-dom'
import CategoryImg from '../../components/CategoryImg'

const Category = () => {

  const imagetest ="https://workjoby.com/wp-content/uploads/2022/06/retire-early-768x432.jpg?ezimgfmt=ngcb1/notWebP";
  return (

    <div className="category">

      <h2 className="category-title">Explore by Category</h2>

      <div className="category-searchBar-mobileIcon">
        
        <div className="serach-category">
          <input type="text" placeholder='Search' />
          <i><img src={searchIcon} alt="" /></i>
          </div>
        
        
       
        <div className="category-mobile-icon"><img src={mobileIcon} alt="" /></div>
      </div>

      <div className="category-links">

        <div className="category-links-top">
        <NavLink to='/' className={({ isActive}) => isActive ? "style-link" : ""} >Bedroom</NavLink>
      <NavLink to='/' className={({ isActive}) => isActive ? "" : ""} >Dinning Room</NavLink>
      <NavLink to='/' className={({ isActive}) => isActive ? "" : ""} >Meeting Room</NavLink>
      <NavLink to='/' className={({ isActive}) => isActive ? "" : ""} >Workspace</NavLink>
        </div>

    <div className="category-links-bottom">
      <NavLink to='/' className={({ isActive}) => isActive ? "" : ""} >LivingRoom</NavLink>
      <NavLink to='/' className={({ isActive}) => isActive ? "" : ""} >Room Kitchen</NavLink>
      <NavLink to='/' className={({ isActive}) => isActive ? "" : ""} >Living Space</NavLink>
      </div>

        </div>

        <div className="category-images">

          <CategoryImg image={imagetest} name={'Bedroom'}/>
          <CategoryImg image={imagetest} name={'Dinning Room'}/>
          <CategoryImg image={imagetest} name={'Meeting Room'}/>
          <CategoryImg image={imagetest} name={'Workspace'}/>
          <CategoryImg image={imagetest} name={'Living Room'}/>
          <CategoryImg image={imagetest} name={'Kitchen Room'}/>
         
        </div>


      <button className="allCategory">
        <div>All Categories</div>
        <img src={arrow} alt="" />
        </button>

    </div>

  )
}

export default Category