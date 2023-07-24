import React,{ useState,useEffect,useRef } from "react"
import './popular-products.css'
import furniture from '../../furniture.json'
import PopularProduct from '../../components/PopularProduct'
import ScrollingBar from '../../components/scrollingBar/scroolingBar'


const PopularProducts = () => {

 const [popularGridImgWidth,setpopularGridImgWidth]=useState(null)
 const popularImgGrid = useRef(null)
 const [popularProductWidth,setpopularProductWidth]=useState(null)
 const numberOfProducts = furniture.popularProducts.length
 const show='flex'
 const hide='none'
 const scrollBarMobileTablet= useRef(null)
 const scrollBarDesktop = useRef(null)
 const [scrollBarMobileTabletWidth,setScrollBarMobileTabletWidth]=useState(null)
 const [scrollbarDesktopWidth,setScrollbarDesktopWidth]=useState(null)
 const [calibrate,setcalibrate]=useState(false)
 const [translateImgSteps,settranslateImgSteps]=useState(0)
 const [ScrollingElmnSize,setScrollingElmnSize]=useState(null)
 const [ratioImgGridStep,setRatioImgGridStep]=useState(0)
 const [scrollingGridImgOffset,setScrollingGridImgOffset]=useState(0)

useEffect(()=>{

  // calculate the margin left of grid images
  const getscrollingGridImgOffset = popularImgGrid.current.getBoundingClientRect().left
  //i've put 2 to let the same value of margin when you finsih scrolling at the end
  setScrollingGridImgOffset(2*getscrollingGridImgOffset)


},[])
 

 useEffect(()=>{ 
  
  const getPopularImageGridWidth= popularImgGrid.current.getBoundingClientRect().width
  setpopularGridImgWidth(getPopularImageGridWidth) 
  const getPopularProductWidth =getPopularImageGridWidth/numberOfProducts
  setpopularProductWidth(getPopularProductWidth)

  // resizing the scrollbar size depending to the viewport
  const pageViewPort= document.documentElement.clientWidth
  const scrollBarMobileTabletOffsetX = scrollBarMobileTablet.current.getBoundingClientRect().left
  const getscrollBarMobileWidth = pageViewPort-scrollBarMobileTabletOffsetX//
  setScrollBarMobileTabletWidth(getscrollBarMobileWidth)
  
  //setting the scrollbarDesktopwidth

  const getScrollDesktopWidth = 0.8*pageViewPort
  setScrollbarDesktopWidth(getScrollDesktopWidth)

  // the size of scrolling element

  const getScrollingElmnSize = getPopularProductWidth/3
  setScrollingElmnSize(getScrollingElmnSize)

// checking which scrollbar is displayed mobileTablet or desktop scrollbar 

const scrollBarMobileTabletIsDisplayed = getComputedStyle(scrollBarMobileTablet.current).display !=='none'
const scrollBarDesktopIsDisplayed = getComputedStyle(scrollBarDesktop.current).display !=='none'
let scrollingDistance = 0

 if(scrollBarMobileTabletIsDisplayed){scrollingDistance=getscrollBarMobileWidth; }
 
  else if(scrollBarDesktopIsDisplayed){ scrollingDistance=getScrollDesktopWidth; }      

// setting the translate images steps
  
  const distanceImgsWillTranslate = (getPopularImageGridWidth-pageViewPort+scrollingGridImgOffset)
  
  const distanceCursorWillMove =  (scrollingDistance-getScrollingElmnSize)
  
  const getRatioStep = distanceImgsWillTranslate/distanceCursorWillMove
  setRatioImgGridStep(getRatioStep)


  window.addEventListener('resize', resizeScrollBar);

    return () => {

      window.removeEventListener('resize', resizeScrollBar);

    };
  
}
  ,[calibrate,scrollingGridImgOffset])


 function resizeScrollBar (){
  
  const newViewPort = document.documentElement.clientWidth
  const newScrollBarOffsetX = scrollBarMobileTablet.current.getBoundingClientRect().left
  setScrollBarMobileTabletWidth(newViewPort-newScrollBarOffsetX)
  setcalibrate(!calibrate)

 
 }

 const PopularProductImgStyle = {

  transform: `translate(${-translateImgSteps}px , 0)`

 }

function extractScrollingPos(PositionOfCursor){

  //setCursorPosition(PositionOfCursor)
  settranslateImgSteps(PositionOfCursor*ratioImgGridStep)
  //console.log(PositionOfCursor,ratioImgGridStep)
}

    return (

    <div className="popularProducts" >

      <h2 className="popularProducts-title">Popular Products</h2>
      <div className="popular-products-images" 
      ref={popularImgGrid}
      style={PopularProductImgStyle}
      >
        {furniture.popularProducts.map(
          (item,index )=> <PopularProduct key={index} image={item.image} name={item.name} description={item.description} price={item.price}/>)}
      </div>

    <div className="scrollBarContainer-mobile-tablet" ref={scrollBarMobileTablet}>
      <ScrollingBar 

        btnsDisplay={hide}
        btnsDisplayJustifyPosition={'end'}
        btnsPosition={'inline-grid'} 
        //objectToDragWidth={popularProductWidth/3}
        objectToDragWidth={ScrollingElmnSize}
        objectToDragHeight={7}
        distanceWhereToDragWidth={scrollBarMobileTabletWidth}
        distanceWhereToDragHeight={5}
        calibrateScrollBar={calibrate}
        getScrollingPosition={extractScrollingPos}
        color={'#70908B'}
        
        />
        </div>  

  <div className="scrollBarContainer-desktop" ref={scrollBarDesktop}>
    <ScrollingBar 
        btnsDisplay={show}
        btnsDisplayJustifyPosition={'end'}
        btnsPosition={'inline-grid'} 
        objectToDragWidth={ScrollingElmnSize}
        //objectToDragWidth={183}
        objectToDragHeight={7}
        distanceWhereToDragWidth={scrollbarDesktopWidth}
        distanceWhereToDragHeight={5}
        calibrateScrollBar={calibrate}
        getScrollingPosition={extractScrollingPos}
        marginBtns={'14px 0 0 0'}
        color={'#70908B'}
        />
        </div>  
        

      <button 
       >Explore all items</button>

    </div>

  )
}

export default PopularProducts