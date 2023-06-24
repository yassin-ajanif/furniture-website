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

import bedroom from "../category/category-assets/bedroom-resize.jpg";
import dinning_room from "../category/category-assets/dinning room.jpg";
import meeting_room from "../category/category-assets/meeting room.jpg";
import workspace from "../category/category-assets/workspace.jpg";
import living_room from "../category/category-assets/living room.jpg";
import kitechen_room from "../category/category-assets/kitechen room.jpg";

const Category = () => {
  const maxScrollDown = 900;
  const maxScrollUp = 0;
  const oneStepScroll = 100;
  const [scrollPosition, setscrollPosition] = useState(0);
  const [value,setValue]=useState(0)

  function down() {
    
    if(scrollPosition !== maxScrollDown)  
    {   setscrollPosition(scrollPosition + oneStepScroll);
        setValue(value+1)}
       
  }
  function up() {

    if(scrollPosition !== maxScrollUp)
     
    {setscrollPosition(scrollPosition - oneStepScroll);
        setValue(value-1)}
      
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

            <div className="category-links-desktop" style={{translate : ` 0 -${value*14.28}% `}}>

            <div className="shown-links"> 
              <NavLink to="/az">Bedroom</NavLink>
              <NavLink to="/">Dinning Room</NavLink>
              <NavLink to="/">Meeting Room</NavLink>
              <NavLink to="/">Workspace</NavLink>
              <NavLink to="/">LivingRoom</NavLink>
              <NavLink to="/">Room Kitchen</NavLink>
              <NavLink to="/">Living Space</NavLink>
            </div>
            <div className="hidden-links">
              <NavLink to="/">Test 1</NavLink>
              <NavLink to="/">Test 2</NavLink>
              <NavLink to="/">Test 3</NavLink>
            </div>
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
          <CategoryImg image={bedroom} name={"Bedroom"} link={"/y"} />
          <CategoryImg image={dinning_room} name={"Dinning Room"} link={"/"} />
          <CategoryImg image={meeting_room} name={"Meeting Room"} link={"/b"} />
          <CategoryImg image={workspace} name={"Workspace"} link={"/c"} />
          <CategoryImg image={living_room} name={"Living Room"} link={"/e"} />
          <CategoryImg
            image={kitechen_room}
            name={"Kitchen Room"}
            link={"/f"}
          />
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
