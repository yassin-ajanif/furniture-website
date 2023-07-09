import React, { useCallback, useEffect,useRef,useState } from "react";
import ScrollingBar from '../../components/scrollingBar/scroolingBar'
import furniture from '../../furniture.json'
import expandImgMobile from './special-package-assets/expand.png'
import stars from './special-package-assets/stars.png'
import trolley from './special-package-assets/trolley.png'
import SeeMoreArrowDown from './special-package-assets/seeMoreArrowDown.png'
import expandImgTablet from './special-package-assets/expand-tablet.png'
import ScrollingProduct from "../../components/scrollingProduct/scrollingProduct";
import VerticalScrollBar from "../../components/verticalScrollBar/VerticalScrollBar";
import './special-package.css'


const SpecialPackage = () => {

 const [scrollingMobileBarWidth,setscrollingMobileBarWidth] =useState(0)
 const [scrollingTabletBarWidth,setscrollingTabletBarWidth] =useState(0)
 const [scrollingDesktopBarHeight,setscrollingDesktopBarHeight] =useState(0)
 const MobileScrollBarComp = useRef(null)
 const MobileProductsGrid = useRef(null)
 const TabletScrollBarComp=useRef(null)
 const TabletProductsGrid = useRef(null)
 const scrollingDesktopProductList = useRef(null)
 const [translateMobileStep,setTranslateMobileStep]=useState(0)
 const [translateTabletStep,setTranslateTabletStep]=useState(0)
 const scrollingMobileElmntSize =50
 const scrollingTabletElmntSize=104
 const [GridProductsMobileOffsetX,setGridMobileProductsOffsetX]=useState(0)
 const [GridProductsTabletOffsetX,setGridTabletProductsOffsetX]=useState(0)
 const [calibrate,setcalibrate]=useState(false)

 useEffect(()=>{
 
  // set the size of products container mobile version
  const getGridProductsMobileOffsetX=MobileProductsGrid.current.getBoundingClientRect().left*2
  // i multiplied by 2 to keep the space or the margin as you found in the begining
  setGridMobileProductsOffsetX(getGridProductsMobileOffsetX)

  // set the size of products container tablet version
  const getGridProductsTabletOffsetX=TabletProductsGrid.current.getBoundingClientRect().left*2
  // i multiplied by 2 to keep the space or the margin as you found in the begining
  setGridTabletProductsOffsetX(getGridProductsTabletOffsetX)


},[])

  useEffect(()=>{

    // determining the width of scrollBarMobile
  const pageViewPort = document.documentElement.clientWidth
  const scrollBarMobileOffsetX = MobileScrollBarComp.current.getBoundingClientRect().left
  const getScrollBarMobileWidth = pageViewPort-scrollBarMobileOffsetX
  setscrollingMobileBarWidth(getScrollBarMobileWidth)
   // // determining the width of scrollBarTablet
   const scrollBarTabletOffsetX = TabletScrollBarComp.current.getBoundingClientRect().left
   const getScrollBarTabletWidth = pageViewPort-scrollBarTabletOffsetX
   setscrollingTabletBarWidth(getScrollBarTabletWidth) 

   //determining the width of scrollBarTablet  the height is width becuase with just rotaed our scrollBar
   const scrollingDesktopProductListHeight = scrollingDesktopProductList.current.clientHeight
   const HeightOfBtns = 80  // this is the height of two buttns up and donw arrows
   const marginsAndGaps = 40 // theses are the margins and gaps between btns
   const getScrollBarDesktopHeight = scrollingDesktopProductListHeight-HeightOfBtns-marginsAndGaps
   setscrollingDesktopBarHeight(getScrollBarDesktopHeight) 

   console.log(scrollingDesktopProductListHeight)
  // this section is for autoresizing the scrollBar when you change the viewport 

   window.addEventListener('resize',autoResizeScrollBar)

   return ()=>window.removeEventListener('resize',autoResizeScrollBar)

  },[calibrate])


  


function scrollProductImages(scrollingBarPosition){
  
  const pageViewPort=document.documentElement.clientWidth

  //set houw much the products images will move when you scroll mobile version
  const gridMobileProductsWidth=MobileProductsGrid.current.getBoundingClientRect().width
  const maxDistanceToScorllProductsMobile = gridMobileProductsWidth+GridProductsMobileOffsetX-pageViewPort
  const MaxdistanceToscrollMouseMobile = scrollingMobileBarWidth-scrollingMobileElmntSize
  const ratioMobile = maxDistanceToScorllProductsMobile/MaxdistanceToscrollMouseMobile
  const gettranslateStepMobile = scrollingBarPosition*ratioMobile
  setTranslateMobileStep(gettranslateStepMobile)

   //set houw much the products images will move when you scroll tablet version
   const gridTabletProductsWidth=TabletProductsGrid.current.getBoundingClientRect().width
   const maxDistanceToScorllProductsTablet = gridTabletProductsWidth+GridProductsTabletOffsetX-pageViewPort
   const MaxdistanceToscrollMouseTablet = scrollingTabletBarWidth-scrollingTabletElmntSize
   const ratioTablet = maxDistanceToScorllProductsTablet/MaxdistanceToscrollMouseTablet
   const gettranslateStepTablet = scrollingBarPosition*ratioTablet
   setTranslateTabletStep(gettranslateStepTablet)
 
  

}

function autoResizeScrollBar(){

  const newViewPort = document.documentElement.clientWidth
  //setting the new scrollbar size of mobile version when you resize the page
  const newscrollBarMobileOffsetX = MobileScrollBarComp.current.getBoundingClientRect().left
  setscrollingMobileBarWidth(newViewPort-newscrollBarMobileOffsetX )
  //setting the new scrollbar size of tablet version when you resize the page
  const newscrollBarTabletOffsetX = TabletScrollBarComp.current.getBoundingClientRect().left
  setscrollingTabletBarWidth(newViewPort-newscrollBarTabletOffsetX )
  // change the state to run the useffect agin which mean restart a calibration 
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
          <div className="description-title">Descritption</div>
          <p className="description-context">{descriptionTest}</p>

  </div>

}


// this section for styling dynamic components elements

const MobileProductsElmnts = {

  display:'inline-flex',
  gap:'8vw',
  transform:`translate(${-translateMobileStep}px,0px)`
}

const TabletProductsElmnts = {

  display:'inline-flex',
  gap:'8vw',
  transform:`translate(${-translateTabletStep}px,0px)`
}

const testImage = furniture.categoryProducts[0].image
const descriptionTest = furniture.popularProducts[0].description

  return (
    <div className="specialPackage">

      <h2 className="title">Special Package</h2>

      <div className="sepcialPackage-mobile-section">
       
      <div className="products" style={MobileProductsElmnts} ref={MobileProductsGrid}>
        
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
        
     <div className="first-group">
       <div className="productsImage">
            <img className='principalImage' src={testImage} />
            <button className="expandBtn">
              <img className='expandImage' src={expandImgTablet}  />
            </button>
      </div>

       <div className="product-infos">
          <div className="productName">Larkin Wood Full Set</div>
          <div className="stars"><img src={stars} alt="" /></div>
          <p className="price">$729.99</p>
          <button className="addToCart">
            <span>Add to Cart</span>
            <img src={trolley} alt="" />
          </button>
          <div className="description-title">Descritption</div>
          <p className="description-content">{descriptionTest}</p>
      </div>
    </div>


     <div className="second-group">
       <div style={TabletProductsElmnts} ref={TabletProductsGrid}>
      
         <ScrollingProduct/>
         <ScrollingProduct/>
         <ScrollingProduct/>

       </div>

       <div className="scrolling-bar" ref={TabletScrollBarComp}>
          <ScrollingBar

          btnsDisplay={'none'}
          btnsDisplayJustifyPosition={'end'}
          btnsPosition={'inline-grid'} 
          //objectToDragWidth={popularProductWidth/3}
          objectToDragWidth={scrollingTabletElmntSize}
          objectToDragHeight={30}
          //distanceWhereToDragWidth={scrollBarMobileTabletWidth}
          distanceWhereToDragWidth={scrollingTabletBarWidth}
          distanceWhereToDragHeight={5}
          calibrateScrollBar={calibrate}
          getScrollingPosition={scrollProductImages}

          />
       </div>
     </div>



      </div>

      <div className="sepcialPackage-desktop-section">
        
      <div className="left-group">
       <div className="productsImage">
            <img className='principalImage' src={testImage} />
            <button className="expandBtn">
              <img className='expandImage' src={expandImgTablet}  />
            </button>
      </div>

       <div className="product-infos">

        <div className="productName-addTocard">
          <div className="productName">Larkin Wood Full Set</div>
          <button className="addToCart">
            <span>Add to Cart</span>
            <img src={trolley} alt="" />
          </button>
        </div>  

          <div className="stars"><img src={stars} alt="" /></div>
          <p className="price">$729.99</p>
          
          
      </div>
    </div>

       <div className="right-group">

       <div className="description-title">Descritption</div>
       <p className="description-content">{descriptionTest}</p>
       <div className="seeMore">
       <span>See More</span>
       <img src={SeeMoreArrowDown} />
       </div>
       <div className="scrolling-section">

            <div className="top">
              <ScrollingProduct/>
              </div>

            <div className="scrolling-products-container">

            <div className="lists" ref={scrollingDesktopProductList}>

           
            <ScrollingProduct
              infoSectionBckColor={'white'}
              ProductNameFontSize={'16px'}
              starsImgSize={90}
              seeDetailsFontSize={'14px'}
            />
            <ScrollingProduct
              infoSectionBckColor={'white'}
              ProductNameFontSize={'16px'}
              starsImgSize={90}
              seeDetailsFontSize={'14px'}
            />
           

           <ScrollingProduct
              infoSectionBckColor={'white'}
              ProductNameFontSize={'16px'}
              starsImgSize={90}
              seeDetailsFontSize={'14px'}
            />

           <ScrollingProduct
              infoSectionBckColor={'white'}
              ProductNameFontSize={'16px'}
              starsImgSize={90}
              seeDetailsFontSize={'14px'}
            />
         


            </div>

           

            <div className="scrollingBar">
            
            <VerticalScrollBar

             scrollBarHeight={scrollingDesktopBarHeight}
      
            />
            

           
           </div>

           


            </div>
        
        </div>
       </div>

      </div>

      
  
    </div>
  );
};

export default SpecialPackage;
