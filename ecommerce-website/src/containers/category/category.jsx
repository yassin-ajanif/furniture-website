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

import bedroom from '../category/category-assets/bedroom-resize.jpg'
import dinning_room from '../category/category-assets/dinning room.jpg'
import meeting_room from '../category/category-assets/meeting room.jpg'
import workspace from '../category/category-assets/workspace.jpg'
import living_room from '../category/category-assets/living room.jpg'
import kitechen_room from '../category/category-assets/kitechen room.jpg'

const Category = () => {

  const maxScrollDown=600;
  const maxScrollUp=0;
  const [scrollingUpBy,setscrollingUpBy]=useState(0);
  const [scrollingDownBy,setscrollingDownBy]=useState(0);
  const [scrollPosition,setscrollPosition]=useState(0)

  console.log(scrollingDownBy)

function down(){

   scrollPosition === maxScrollDown ? '' : setscrollPosition(scrollPosition+100)

  }
function up(){

  scrollPosition === maxScrollUp ? '' : setscrollPosition(scrollPosition-100)

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
              <NavLink
                to="/az"
                
              >
                Bedroom
              </NavLink>
              <NavLink
                to="/"
                
              >
                Dinning Room
              </NavLink>
              <NavLink
                to="/"
                
              >
                Meeting Room
              </NavLink>
              <NavLink
                to="/"
                
              >
                Workspace
              </NavLink>
            </div>

            <div className="category-links-bottom">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "" : "")}
              >
                LivingRoom
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "" : "")}
              >
                Room Kitchen
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "" : "")}
              >
                Living Space
              </NavLink>
            </div>

            <div className="category-links-hidden">
              <div className="test1">test1</div>
              <div className="test2">test2</div>
              <div className="test3">test3</div>
            </div>

          </div>

            <div className="category-sidebar-scrollBar">
              
              <div className="scrollBar-line">
                <div className="longer-line">
                  <img src={longerLine} alt="" />
                </div>
                <div className="shorter-line" style={{ translate : ` 0 ${scrollPosition}%` }}>
                  <img src={shortLine} alt="" />
                </div>
              </div>
              <div className="circle-up" onClick={()=>up()}>
                <div className="up-circle">
                  <img src={upCircle} alt="" />
                </div>
                <div className="up-circle-arrow">
                  <img src={arrowUp} alt="" />
                </div>
              </div>

              <div className="circle-down" onClick={()=>down()}>
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
  <CategoryImg image={kitechen_room} name={"Kitchen Room"} link={"/f"} /> 



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
