import React, { useState } from "react";
import mobileIcon from "../header/header-assets/mobileMenu.png";
import searchIcon from "../category/category-assets/search.png";
import "./category.css";
import arrow from "../category/category-assets/arrow-right.png";
import { NavLink } from "react-router-dom";
import CategoryImg from "../../components/CategoryImg";
import upCircle from "../category/category-assets/upCircle.png";
import donwCirle from "../category/category-assets/downCircle.png";
import arrowDown from "../category/category-assets/arrow1.png";
import arrowUp from "../category/category-assets/arrow2.png";
import shortLine from "../category/category-assets/shorter-line.png";
import longerLine from "../category/category-assets/longer-line.png";

import furniture from '../../furniture.json'


const Category = () => {

  const maxScrollDown = 400;
  const maxScrollUp = 0;
  const oneStepScroll = 100;
  const [scrollPosition, setscrollPosition] = useState(0);
  const [headlinesPosition,setheadlinesPosition]=useState(0);
  const [imgPosition,setimgPosition]=useState(0)

  

  function down() {
    
    if(scrollPosition !== maxScrollDown)  

    {   setscrollPosition(scrollPosition + oneStepScroll);
        setheadlinesPosition(headlinesPosition+1);
        setimgPosition(imgPosition+1)
        
      }
       
  }
  function up() {

    if(scrollPosition !== maxScrollUp)
     
    {
      setscrollPosition(scrollPosition - oneStepScroll);
      setheadlinesPosition(headlinesPosition-1);
      setimgPosition(imgPosition-1)
      

      }
      
    }

  return (
    <div className="category">
      <h2 className="category-title">Explore by Category</h2>
      <div className="category-context">
        <div className="category-sidebar">
          <div className="category-searchBar-mobileIcon">
            <div className="serach-category">
              <input type="text" placeholder="Search" />
              <i>
                <img src={searchIcon} alt="" />
              </i>
            </div>

            <div className="category-mobile-icon">
              <img src={mobileIcon} alt="" />
            </div>
          </div>

          <div className="category-links">
            <div className="category-links-top-bottom">
              <div className="category-links-top">
                <NavLink to="/az">Bedroom</NavLink>
                <NavLink to="/">Dinning Room</NavLink>
                <NavLink to="/">Meeting Room</NavLink>
                <NavLink to="/">Workspace</NavLink>
              </div>

              <div className="category-links-bottom">
                <NavLink to="/">LivingRoom</NavLink>
                <NavLink to="/">Room Kitchen</NavLink>
                <NavLink to="/">Living Space</NavLink>
              </div>
            </div>

            <div className="category-links-desktop" style={{translate : ` 0 -${headlinesPosition*10}% `}}>

              <NavLink to="/">Bedroom</NavLink>
              <NavLink to="/">Dinning Room</NavLink>
              <NavLink to="/">Meeting Room</NavLink>
              <NavLink to="/">Workspace</NavLink>
              <NavLink to="/">LivingRoom</NavLink>
              <NavLink to="/">Room Kitchen</NavLink>
              <NavLink to="/">Living Space</NavLink>
              <NavLink to="/">Bathroom</NavLink>
              <NavLink to="/">Exercise Room</NavLink>
              <NavLink to="/">Entertainment Room</NavLink>
            
      </div>
            <div className="category-sidebar-scrollBar">
              <div className="scrollBar-line">
                <div className="longer-line">
                  <img src={longerLine} alt="" />
                </div>
                <div
                  className="shorter-line"
                  style={{ translate: ` 0 ${scrollPosition}%` }}
                >
                  <img src={shortLine} alt="" />
                </div>
              </div>
              <div className="circle-up" onClick={() => up()}>
                <div className="up-circle">
                  <img src={upCircle} alt="" />
                </div>
                <div className="up-circle-arrow">
                  <img src={arrowUp} alt="" />
                </div>
              </div>

              <div className="circle-down" onClick={() => down()}>
                <div className="down-circle">
                  <img src={donwCirle} alt="" />
                </div>

                <div className="down-cirlce-arrow">
                  <img src={arrowDown} alt="" />
                </div>
              </div>
            </div>
          </div>

          <button className="allCategory-btn tableDesktop-display">
            <div>All Categories</div>
            <img src={arrow} alt="" />
          </button>
        </div>

        <div className="category-images">

         {  
         
         furniture.categoryProducts.map( (furniture,index) => 
         
          {

          const ifScrollBtnPressed = index >=imgPosition && index <=imgPosition+5 ? 

         <CategoryImg image={furniture.image} name={furniture.name} link={"/y"} />

          :

          ''

         return ifScrollBtnPressed

        }

         )
      }
         
         
         
          
        </div>
      </div>

      <button className="allCategory-btn mobile-display">
        <div>All Categories</div>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default Category;
