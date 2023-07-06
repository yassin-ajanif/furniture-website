import React, { useCallback, useEffect,useRef,useState } from "react";
import LeftSpecialPackage from "../../components/SpecialPackagesComps/LeftSpecialComp/LeftSpecialPackage";
import RightSpecialPackage from "../../components/SpecialPackagesComps/RightSpecialPackage/RightSpecialPackage";
import ScrollingBar from '../../components/scrollingBar/scroolingBar'
import furniture from '../../furniture.json'
import expandImg from '../../components/SpecialPackagesComps/LeftSpecialComp/LeftSpecial-assets/expand.png'
import stars from '../../components/SpecialPackagesComps/LeftSpecialComp/LeftSpecial-assets/stars.png'
import trolley from '../../components/SpecialPackagesComps/LeftSpecialComp/LeftSpecial-assets/trolley.png'

import './special-package.css'


const SpecialPackage = () => {

 const [scrollingMobileBarWidth,setscrollingMobileBarWidth] =useState(0)
 const MobileScrollBarComp = useRef(null)
 const MobileProductsGrid = useRef(null)
 const [translateStep,setTranslateStep]=useState(0)
 const scrollingMobileElmntSize =50
 const [GridProductsOffsetX,setGridProductsOffsetX]=useState(0)
 const [calibrate,setcalibrate]=useState(false)

 useEffect(()=>{

  const getGridProductsOffsetX=MobileProductsGrid.current.getBoundingClientRect().left*2
  // i multiplied by 2 to keep the space or the margin as you found in the begining
  setGridProductsOffsetX(getGridProductsOffsetX)
  console.log('hi')

},[])

function test(){}

  useEffect(()=>{

    // determining the with of scrollBarMobile
  const pageViewPort = document.documentElement.clientWidth
  const scrollBarMobileOffsetX = MobileScrollBarComp.current.getBoundingClientRect().left
  const getScrollBarMobileWidth = pageViewPort-scrollBarMobileOffsetX
  setscrollingMobileBarWidth(getScrollBarMobileWidth)

  //get the margin-left of mobileProductsWidth




  console.log('useeffect')
  // this section is for autoresizing the scrollBar when you change the viewport 

   window.addEventListener('resize',autoResizeScrollBar)

   return ()=>window.removeEventListener('resize',autoResizeScrollBar)

  },[calibrate])

  

function scrollProductImages(scrollingBarPosition){
  
  //set houw much the products images will move when i scroll
  const gridProductsWidth=MobileProductsGrid.current.getBoundingClientRect().width
  const pageViewPort=document.documentElement.clientWidth
  const maxDistanceToScorllProducts = gridProductsWidth+GridProductsOffsetX-pageViewPort
  const MaxdistanceToscrollMouse = scrollingMobileBarWidth-scrollingMobileElmntSize
  const ratio = maxDistanceToScorllProducts/MaxdistanceToscrollMouse
  const gettranslateStep = scrollingBarPosition*ratio
  setTranslateStep(gettranslateStep)

  console.log('gridProductsWidth',gridProductsWidth)
  console.log('gridProductsOffsetX',GridProductsOffsetX)
  console.log('pageViewPort',pageViewPort)
  console.log('scrollingMobileBarWidth',scrollingMobileBarWidth)
 
  

}

function autoResizeScrollBar(){

  const newViewPort = document.documentElement.clientWidth
  const newscrollBarMobileOffsetX = MobileScrollBarComp.current.getBoundingClientRect().left
  setscrollingMobileBarWidth(newViewPort-newscrollBarMobileOffsetX )
  setcalibrate(!calibrate)
}
function MobileProductComponent(){

  return <div className="MobileProductContainer">

<div className="images">
            <img src={testImage} alt="" />
          </div>
          <div className="productName">Larkin Wood Full Set</div>
          <div className="stars"><img src={stars} alt="" /></div>
          <p className="price">$729.99</p>
          <button className="addToCart">
            <span>Add to Cart</span>
            <img src={trolley} alt="" />
          </button>
          <div>Descritption</div>
          <p>{descriptionTest}</p>

  </div>

}


// this section for styling dynamic components elements

const MobileProductsElmnts = {
/*668*/ 
  display:'inline-flex',
  gap:'8vw',
  transform:`translate(${-translateStep}px,0px)`
}

const testImage = furniture.categoryProducts[0].image
const descriptionTest = furniture.popularProducts[0].description

  return (
    <div className="specialPackage">

      <h2 className="title">Special Package</h2>

      <div className="sepcialPackage-mobile-section">
       
        <div className="mobile-products" style={MobileProductsElmnts} ref={MobileProductsGrid}>
        <MobileProductComponent />
        <MobileProductComponent/>
        <MobileProductComponent/>
        <MobileProductComponent/>
        
          </div>
          
        <div className="scrolling-bar" ref={MobileScrollBarComp}>
          <ScrollingBar

          btnsDisplay={'none'}
          btnsDisplayJustifyPosition={'end'}
          btnsPosition={'inline-grid'} 
          //objectToDragWidth={popularProductWidth/3}
          objectToDragWidth={scrollingMobileElmntSize}
          objectToDragHeight={30}
          //distanceWhereToDragWidth={scrollBarMobileTabletWidth}
          distanceWhereToDragWidth={scrollingMobileBarWidth}
          distanceWhereToDragHeight={5}
          calibrateScrollBar={calibrate}
          getScrollingPosition={scrollProductImages}

          />

        </div>

      </div>


      <div className="sepcialPackage-tablet-section">
        
      </div>

      <div className="sepcialPackage-desktop-section">
        
      </div>
  
    </div>
  );
};

export default SpecialPackage;
