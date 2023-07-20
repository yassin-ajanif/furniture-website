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
import {useDispatch,useSelector} from 'react-redux'
import { incrementProductNumber,addingProduct } from "../../Slice";
import './special-package.css'


const SpecialPackage = () => {

 const [scrollingMobileBarWidth,setscrollingMobileBarWidth] =useState(0)
 const [scrollingTabletBarWidth,setscrollingTabletBarWidth] =useState(0)
 const [scrollingDesktopBarHeight,setscrollingDesktopBarHeight] =useState(0)
 const MobileScrollBarComp = useRef(null)
 const MobileProductsGrid = useRef(null)
 const TabletScrollBarComp=useRef(null)
 const TabletProductsGrid = useRef(null)
 const scrolledProdcut = useRef(null)
 const [translateMobileStep,setTranslateMobileStep]=useState(0)
 const [translateTabletStep,setTranslateTabletStep]=useState(0)
 const [translateDesktopStep,setTranslateDesktopStep]=useState(0)
 const scrollingMobileElmntSize =50
 const scrollingTabletElmntSize=104
 const scrollingDesktopEmntSize=30
 const [scrollingSectionHeight,setscrollingSectionHeight]=useState(0)
 const [ScrollProductHeight,SetScrollProductHeight]=useState(0)
 const [GridProductsMobileOffsetX,setGridMobileProductsOffsetX]=useState(0)
 const [GridProductsTabletOffsetX,setGridTabletProductsOffsetX]=useState(0)
 const [calibrate,setcalibrate]=useState(false)
 const dispatch = useDispatch()

 
 useEffect(()=>{
 
  // set the size of products container mobile version
  const getGridProductsMobileOffsetX=MobileProductsGrid.current.getBoundingClientRect().left*2
  // i multiplied by 2 to keep the space or the margin as you found in the begining
  setGridMobileProductsOffsetX(getGridProductsMobileOffsetX)

  // set the size of products container tablet version
  const getGridProductsTabletOffsetX=TabletProductsGrid.current.getBoundingClientRect().left*2
  // i multiplied by 2 to keep the space or the margin as you found in the begining
  setGridTabletProductsOffsetX(getGridProductsTabletOffsetX)
 // 

 window.addEventListener('load',CalibrateScrolledProductHeight_CalibrateScrollBarHeight)

 return ()=>window.removeEventListener('resize',CalibrateScrolledProductHeight_CalibrateScrollBarHeight)

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
    
   // calibrate the scrollbar and scrolling height of products list

   CalibrateScrolledProductHeight_CalibrateScrollBarHeight()
  
   
  // this section is for autoresizing the scrollBar when you change the viewport 

   window.addEventListener('resize',autoResizeScrollBar)

   return ()=>window.removeEventListener('resize',autoResizeScrollBar)

   

  },[calibrate])




function CalibrateScrolledProductHeight_CalibrateScrollBarHeight(){
  
  // getting the height of one of the scrolledProduct when it rendered
  const getScrolledProductHeight = scrolledProdcut.current.clientHeight
  // the product all have the same height so i want it to include 2 products which is the reason of multiplying by 2
  
  const listOfScrollProductsHeight = getScrolledProductHeight*2
  
  const HeightOfBtns = 80  // this is the height of two buttns up and donw arrows
  const marginsAndGaps = 40 // theses are the margins and gaps between btns
  const getScrollBarDesktopHeight = listOfScrollProductsHeight-HeightOfBtns-marginsAndGaps
  
  SetScrollProductHeight(getScrolledProductHeight)
  setscrollingSectionHeight(listOfScrollProductsHeight)
  setscrollingDesktopBarHeight(getScrollBarDesktopHeight)

}
  
// this is only fo tablet and mobile version
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

// this is for desktop version
function scrollProductsImagesDesktop(scrollingBarPosition){
  
    //Setting the height of the products group we're going to scroll
  const gridOfScrollingProductsHeight = ScrollProductHeight*4
  const maxDistanceToScorllProductsDesktop = gridOfScrollingProductsHeight-scrollingSectionHeight
  const maxScrollBarCursordistance = scrollingDesktopBarHeight-scrollingDesktopEmntSize
  const ratioDesktop = maxDistanceToScorllProductsDesktop/maxScrollBarCursordistance
  const gettranslateStepDesktop = (scrollingBarPosition)*ratioDesktop
  setTranslateDesktopStep(gettranslateStepDesktop)
  
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

function addToCart (image,price,productName) {
  
  dispatch(incrementProductNumber());
  dispatch(addingProduct({image,price,productName}))


}


function MobileProductComponent({image,productName,price,description}){




  return <div className="MobileProductContainer">

<div className="images">
            <img src={image} alt="" />
          </div>
          <div className="productName">{productName}</div>
          <div className="stars"><img src={stars} alt="" /></div>
          <p className="price">{price}</p>
          <button className="addToCart" 
           onClick={()=>{ addToCart(image,price,productName) }}>
            <span>Add to Cart</span>
            <img src={trolley} alt="" />
          </button>
          <div className="description-title">Descritption</div>
          <p className="description-context">{description}</p>

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

const listsStyle={

height:`${scrollingSectionHeight-4}px`,
// the 4px is for the shadow that go out of the block which makes the product seen before scrolling it
transform: `translateY(${-translateDesktopStep}px)`

}

const testImage = furniture.specialPackageProducts[5].image
const descriptionTest = furniture.specialPackageProducts[0].description

  return (
    <div className="specialPackage">

      <h2 className="title">Special Package</h2>

      <div className="sepcialPackage-mobile-section">
       
      <div className="products" 
           style={MobileProductsElmnts} 
           ref={MobileProductsGrid}>
        
        {furniture.specialPackageProducts.map( item =>
          

          <MobileProductComponent 
          
          image={item.image}
          productName={item.name}
          price={item.price}
          description={item.description}
          key={item.name}
          
          />
          
          )}
        
      </div>
          
        <div className="scrolling-bar" ref={MobileScrollBarComp}>
          <ScrollingBar

          btnsDisplay={'none'}
          btnsDisplayJustifyPosition={'end'}
          btnsPosition={'inline-grid'} 
          //objectToDragWidth={popularProductWidth/3}
          objectToDragWidth={scrollingMobileElmntSize}
          objectToDragHeight={7}
          //distanceWhereToDragWidth={scrollBarMobileTabletWidth}
          distanceWhereToDragWidth={scrollingMobileBarWidth}
          distanceWhereToDragHeight={5}
          calibrateScrollBar={calibrate}
          getScrollingPosition={scrollProductImages}
          color={' #70908B'}

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
      
       {furniture.specialPackageProducts.map( item =>
          

          <ScrollingProduct
          
          image={item.image}
          productName={item.name}
          price={item.price}
          key={item.name}
         
          
          />
          
          )}

       </div>

       <div className="scrolling-bar" ref={TabletScrollBarComp}>
          <ScrollingBar

          btnsDisplay={'none'}
          btnsDisplayJustifyPosition={'end'}
          btnsPosition={'inline-grid'} 
          //objectToDragWidth={popularProductWidth/3}
          objectToDragWidth={scrollingTabletElmntSize}
          objectToDragHeight={7}
          //distanceWhereToDragWidth={scrollBarMobileTabletWidth}
          distanceWhereToDragWidth={scrollingTabletBarWidth}
          distanceWhereToDragHeight={5}
          calibrateScrollBar={calibrate}
          getScrollingPosition={scrollProductImages}
          color={'#70908B'}

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
              <ScrollingProduct
              productName={furniture.specialPackageProducts[1].name}
              image={furniture.specialPackageProducts[1].image}
              price={furniture.specialPackageProducts[1].price}
              
              />
              </div>

            <div className="scrolling-products-container">

            <div className="lists" style={listsStyle}  >

            
            {

             furniture.specialPackageProducts.map(

             item => 

             <div className="scrollingProduct-wrap" 
                 ref={scrolledProdcut}
                 key={Math.random()}
             >
             <ScrollingProduct
               infoSectionBckColor={'#f2fffc'}
               ProductNameFontSize={'16px'}
               starsImgSize={90}
               seeDetailsFontSize={'14px'}
               image={item.image}
               productName={item.name}
               price={item.price}
               key={Math.random()}
             />
             </div>
               
             )

            }


         
            </div>

            

           

            <div className="scrollingBar">
            
            <VerticalScrollBar

             scrollBarHeight={scrollingDesktopBarHeight}
             getScrollingPosition={scrollProductsImagesDesktop}
             HeightOfScrollingElmnt={scrollingDesktopEmntSize}
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
