import React, { useEffect, useRef, useState } from 'react'
import Testimonial from '../../components/testimonials/Testimonial'
import furniture from '../../furniture.json'
import ScrollBar from '../../components/scrollingBar/scroolingBar'
import './testimonials.css'

const Testimonials = () => {

 const [calibrate,setCalibrate]=useState(false) 
 const [scrollBarMobileWidth,setScrollBarMobileWidth]=useState(0)
 const [scrollBarTabletDesktopWidth,setScrollBarTabletDesktopWidth]=useState(0)
 const scrollBarMobile = useRef(null)
 const scrollBarTabletDesktop = useRef(null)
 const TestimonialGrid = useRef(null)
 const numberOfTestimonials = 3
 const scrollingMobileElemntWidth = scrollBarMobileWidth/numberOfTestimonials
 const scrollingDesktopElemntWidth = scrollBarTabletDesktopWidth/numberOfTestimonials
 const [TranslateStep,setTranslatetStep]=useState(0)
 const [ScrollPositionMobileTablet,setScrollPositionMobileTablet]=useState(0)
 const [ScrollPositionDesktop,setScrollPositionDesktop]=useState(0)

  


 useEffect(()=>{

  // auto resize teh scrollbar when you resize the page
  autoResizeScrollBar()
  //
  window.addEventListener('resize',autoResizeScrollBar)
  
  return () => window.removeEventListener('resize',autoResizeScrollBar) 
  
  
  },[])
  
      
  

  function scrollTestimonials(scrollPosition){

    const PageViewPort = document.documentElement.clientWidth;
    // setting the scrolling distance that will move when you scroll
    
    // we're gong to multiply by 2 because the unshown scrollable distance is equal to the width of 2 remaining testimonials
    const widthOfTestimonialGrid = PageViewPort*numberOfTestimonials
    const scrollingTesimonialDistance = widthOfTestimonialGrid-PageViewPort
    // determining the max distance the scrollBarCursor will move
    const isMobileOrTabletMode = PageViewPort<1024
    const isDesktopMode = PageViewPort>=1024
    let MaxScrollBarDistance 
     

  if(isMobileOrTabletMode){
     MaxScrollBarDistance = scrollBarMobileWidth - scrollingMobileElemntWidth; 
    
    }
  else if( isDesktopMode ){

  MaxScrollBarDistance = scrollBarTabletDesktopWidth - scrollingDesktopElemntWidth;
     
  }
     

    const scrollingRatio = scrollingTesimonialDistance/MaxScrollBarDistance    
    const scrollingElmntsPosition = scrollPosition*scrollingRatio

    //setTranslatetStep(Math.min(scrollingElmntsPosition,MaxScrollBarDistance))
    setTranslatetStep(scrollingElmntsPosition)

    console.log('MaxScrollBarDistance',MaxScrollBarDistance)
    console.log('scrollPosition',scrollPosition)

  }
 
  console.log('translateStep',TranslateStep)
  



  function autoResizeScrollBar(){

    const PageViewPort = document.documentElement.clientWidth

    //setting the new scrollbar size of mobile version 
    const scrollBarMobileOffsetX = scrollBarMobile.current.getBoundingClientRect().left
    setScrollBarMobileWidth(PageViewPort-scrollBarMobileOffsetX )
    
    //setting the new scrollbar size of Tablet and desktop version
    const scrollBarTabletDesktopOffsetX = scrollBarTabletDesktop.current.getBoundingClientRect().left
    // the width of right and left scrolling btns
    const scrollingbtnsWidth = 94
    // margins between btns and scrollbarLine
    const margins = 40
    const getScrollBarTabletDesktopWidth = PageViewPort-scrollingbtnsWidth-margins-scrollBarTabletDesktopOffsetX
    setScrollBarTabletDesktopWidth(getScrollBarTabletDesktopWidth)
    
    setCalibrate(prev => !prev)
   
     
  }

  // this section is for styling

  const TestimonialGridStyle ={

    transform : `translateX(${-TranslateStep}px)`,

  }
 

  return (

   <div className="testimonials-container">

    <div className="testimonials">

      <div className="title">Testimonials</div>
      <p className="text">Over 15,000 happy customers</p>
      
     
     <div className="persons" ref={TestimonialGrid} style={TestimonialGridStyle}>
      {furniture.Testimonials.map( 
        
        item =>  
        <Testimonial 
        key={Math.random()}
        image={item.image}
        text={item.text}
        name={item.name}
        profession={item.profession}/>
        
        )}
</div> 
    </div>

    <div className="scrollBarMobileTablet" ref={scrollBarMobile}>
     
    <ScrollBar

    getScrollingPosition={scrollTestimonials}
    
    btnsDisplay={'none'}
    btnsDisplayJustifyPosition={'end'}
    btnsPosition={'inline-flex'} 
    //objectToDragWidth={scrollingBarTabletDesktopElmntWidth}
    objectToDragWidth={scrollingMobileElemntWidth}
    objectToDragHeight={8}
    distanceWhereToDragWidth={scrollBarMobileWidth}
    
    //distanceWhereToDragHeight={scrollingBarElmntHeight}
    distanceWhereToDragHeight={5}
    calibrateScrollBar={calibrate}
    marginBtns={'0 0 0 40px'}
    color={' #70908B'}
    
    />


    </div>

    <div className="scrollBarDesktop" ref={scrollBarTabletDesktop}>
     
    <ScrollBar

    getScrollingPosition={scrollTestimonials}
    
    btnsDisplay={'flex'}
    btnsDisplayJustifyPosition={'end'}
    btnsPosition={'inline-flex'} 
    //objectToDragWidth={scrollingBarTabletDesktopElmntWidth}
    objectToDragWidth={scrollingDesktopElemntWidth}
    objectToDragHeight={8}
    distanceWhereToDragWidth={scrollBarTabletDesktopWidth}
    
    //distanceWhereToDragHeight={scrollingBarElmntHeight}
    distanceWhereToDragHeight={5}
    calibrateScrollBar={calibrate}
    marginBtns={'0 0 0 40px'}
    color={' #70908B'}
    
    />


    </div>

    </div>

  )
}

export default Testimonials