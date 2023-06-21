import React from "react";
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

const Category = () => {
  const imagetest =
    "https://workjoby.com/wp-content/uploads/2022/06/retire-early-768x432.jpg?ezimgfmt=ngcb1/notWebP";
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
                className={({ isActive }) => (isActive ? "style-link" : "")}
              >
                Bedroom
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "style-link" : "")}
              >
                Dinning Room
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "" : "")}
              >
                Meeting Room
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "" : "")}
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

          </div>

            <div className="category-sidebar-scrollBar">
              
              <div className="scrollBar-line">
                <div className="longer-line">
                  <img src={longerLine} alt="" />
                </div>
                <div className="shorter-line">
                  <img src={shortLine} alt="" />
                </div>
              </div>
              <div className="circle-up">
                <div className="up-cirlce">
                  <img src={upCircle} alt="" />
                </div>
                <div className="up-circle-arrow">
                  <img src={arrowUp} alt="" />
                </div>
              </div>

              <div className="circle-down">
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
          <CategoryImg image={imagetest} name={"Bedroom"} link={"/y"} />
          <CategoryImg image={imagetest} name={"Dinning Room"} link={"/"} />
          <CategoryImg image={imagetest} name={"Meeting Room"} link={"/b"} />
          <CategoryImg image={imagetest} name={"Workspace"} link={"/c"} />
          <CategoryImg image={imagetest} name={"Living Room"} link={"/e"} />
          <CategoryImg image={imagetest} name={"Kitchen Room"} link={"/f"} />
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
