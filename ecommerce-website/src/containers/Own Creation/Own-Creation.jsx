import React, { useEffect, useRef, useState } from 'react'
import ScrollBar from '../../components/scrollingBar/scroolingBar'
import './Own-Creation.css'
import furniture from '../../furniture.json'

const OwnCreation = () => {

const [scrollBarMobileWidth,setScrollBarMobileWidth]=useState(0)
const [scrollBarTabletDesktopWidth,setScrollBarTabletDesktopWidth]=useState(0)

const scrollBarMobile = useRef(null)
const gridOwnCreationImages = useRef(null)
const imageContainer = useRef(null)
const ownCreationLeft = useRef(null)
const gridOwnCreationImagesRight = useRef(null)
const [translateMobileImgs,settranslateMobileImgs]=useState(0)
const [translateTabletDesktopImgs,settranslateTabletDesktopImgs]=useState(0)
const [calibrate,setCalibrate]=useState(false)
const scrollingBarMobileElmntWidth =84
const scrollingBarTabletDesktopElmntWidth =27
const scrollingBarElmntHeight =5
const [slideImageWidth,setslideImageWidth]=useState(0)
    
useEffect(()=>{

// auto resize teh scrollbar when you resize the page
autoResizeScrollBar()
// get the positon of sliderImages according to the pageview
const getSlidingImageWidth = imageContainer.current.getBoundingClientRect().width
setslideImageWidth(prevImageWidth => getSlidingImageWidth)

//
window.addEventListener('resize',autoResizeScrollBar)

return () => window.removeEventListener('resize',autoResizeScrollBar) 


},[])


console.log('translateMobileImgs',translateMobileImgs)
console.log('translateTabletDesktopImgs',translateTabletDesktopImgs)


function autoResizeScrollBar(){

    const PageViewPort = document.documentElement.clientWidth

    //setting the new scrollbar size of mobile version when you resize the page
    const scrollBarMobileOffsetX = scrollBarMobile.current.getBoundingClientRect().left
    setScrollBarMobileWidth(PageViewPort-scrollBarMobileOffsetX )
    
    setCalibrate(prev => !prev)

//setting the new scrollbar size of tablet version when you resize the page   

// setting the scrollbarWidth according to it container owncreating left this is for the tablet and desktops version
// we set the width of the container a scrollbar is inside which is ownCreationLeft
const ownCreationLeftWidth = ownCreationLeft.current.clientWidth
// the width of right and left scrolling btns
const scrollingbtnsWidth = 94
// margins between btns and scrollbarLine
const margins = 130
const getScrollBarTabletDesktopWidth = ownCreationLeftWidth-scrollingbtnsWidth-margins

setScrollBarTabletDesktopWidth(getScrollBarTabletDesktopWidth)

   checkTheViewPort()
  }

function scrollImagesMobile (scrollPosition) {

  //geting the viewport value without including scrollBar
const PageViewPort = document.documentElement.clientWidth;
  // getting the viewport value including the scrollBar
  const fullViewPort = window.innerWidth
// detemining the widht of whole container that contain images the container will be draging
const MobilegridOwnCreationImagesWidth = gridOwnCreationImages.current.clientWidth

// determinng the widht of non show grid 
const widthOfgridHiddenPart = MobilegridOwnCreationImagesWidth-PageViewPort
// determining the max distance the scrollBarCursor will move
const MaxScrollBarDistance = scrollBarMobileWidth - scrollingBarMobileElmntWidth
const scrollingRatio = widthOfgridHiddenPart/MaxScrollBarDistance    
const scrollingElmntsPosition = scrollPosition*scrollingRatio

// if we resize to the tablet or dektop reset the images positions to zero for mobile version
if(fullViewPort>=728) settranslateMobileImgs(0)

else {settranslateMobileImgs(scrollingElmntsPosition)}



    }

function scrollImagesTabletDesktop(scrollPosition) {

  
// detemining the widht of whole container that contain images the container will be draging
// getting the viewport value without including the scrollBar
const PageViewPort = document.documentElement.clientWidth; 
 // getting the viewport value including the scrollBar
const fullViewPort = window.innerWidth
const TabletgridOwnCreationImagesWidth = gridOwnCreationImagesRight.current.clientWidth
// determinng the widht of non show grid 
const ownCreationLeftWidth = ownCreationLeft.current.clientWidth
// this is the gap that we set in our css file is 20 it's in the ".ownCreationRight .images" function
const gap = 20
const widthOfgridHiddenPart = TabletgridOwnCreationImagesWidth + ownCreationLeftWidth -PageViewPort +gap
// determining the max distance the scrollBarCursor will move

const MaxScrollBarDistance = scrollBarTabletDesktopWidth - scrollingBarTabletDesktopElmntWidth

const scrollingRatio = widthOfgridHiddenPart/MaxScrollBarDistance    
const scrollingElmntsPosition = scrollPosition*scrollingRatio

// if we resize to the mobile version reset the images positions to zero for mobile version


if(fullViewPort<=728) settranslateTabletDesktopImgs(0)

else {settranslateTabletDesktopImgs(scrollingElmntsPosition)}


    }

function checkImgsPositionMobile(imageSlidePosition){
 
      if(
    
        translateMobileImgs >= imageSlidePosition 
        && 
        translateMobileImgs <= imageSlidePosition+slideImageWidth
        
       
       )  return '1.05' 
       
           return '1'
    
     }
    
function checkImgsPositionTabletDesktop(imageSlidePosition){
    
      
      if(
    
     translateTabletDesktopImgs >= imageSlidePosition 
        &&
     translateTabletDesktopImgs <= imageSlidePosition+slideImageWidth )  return '1.05' 
       
           return '1'
     }

function scalingImages (index){
    
      const imageSlidePosition = slideImageWidth*index
      const PageViewPort = window.innerWidth
      const ismobileMode = PageViewPort<728
      const istabletAndDesktopMode = PageViewPort>=728
      
      /* 
      imageSlidePosition is a position of an image according to its container
      we multiplied by index becuase the images have the same width for example
      the first image position is  slideImageWidth*index = 0  ==>  slideImageWidth=245 *index=0 so imageSlidePosition=0
      the second image position is  slideImageWidth=245*1= 245
      so by conicidence we determining the positon of image just by their width which is cool
      */
      
       // checking the image poisiton to scale it in mobile version 
       
       if(ismobileMode){
      
      
      return checkImgsPositionMobile(imageSlidePosition)
      
        
       }
      
       else if(istabletAndDesktopMode){
       
        return checkImgsPositionTabletDesktop(imageSlidePosition)
      
       }
      
      
      
      }

function checkTheViewPort(){

  const PageViewPort = window.innerWidth
  const ismobileMode = PageViewPort<728
  const istabletAndDesktopMode = PageViewPort>=728
  

   if(ismobileMode) {

    settranslateTabletDesktopImgs(0)
    console.log('mobile')
  }

   else if( istabletAndDesktopMode) settranslateMobileImgs(0)

   
}


    
// this part is for styling elements

const ownCreationContainerStyle ={ 

  transform: `translateX(${-translateMobileImgs}px)`,
}

const ownCreationLeftStyle ={

  transform: `translateX(${-translateTabletDesktopImgs}px)`
}




  return (


    <div className="ownCreationContainer" >

    <div className="ownCreationContainer-wrap" 
    ref={gridOwnCreationImages}
    style={ownCreationContainerStyle}
    >
     
     <div className="ownCreationLeft" ref={ownCreationLeft}>
       
        <div className="wrap">
        <h2>Our Own Creation</h2>
        <h3>Designed in our studio</h3>
        <div className="more_scrollBar">
            <p>More</p>
            <div className="ownCreationScrollBarTabletDesktop"
             ref={scrollBarMobile}>
     <ScrollBar

getScrollingPosition={scrollImagesTabletDesktop}

btnsDisplay={'flex'}
btnsDisplayJustifyPosition={'end'}
btnsPosition={'inline-flex'} 
objectToDragWidth={scrollingBarTabletDesktopElmntWidth}
objectToDragHeight={8}
distanceWhereToDragWidth={scrollBarTabletDesktopWidth}
distanceWhereToDragHeight={scrollingBarElmntHeight}
calibrateScrollBar={calibrate}
marginBtns={'0 0 0 40px'}
color={'white'}

/>

    </div>
            </div>

        </div>

     </div> 

     <div className="ownCreationRight" 
     >
      
       <div className="images" ref={gridOwnCreationImagesRight}
            style={ownCreationLeftStyle} >
        {
          furniture.ownCreationGallery.map((item,index) =>
           
            <div className="imageBackground"
            ref={imageContainer}
            key={Math.random()}
            style={ { scale : scalingImages(index) }}
            >
            <img src={item.image} alt="" />
            </div>
            
            
            )
        }
        </div>

     </div>
   
     </div>

     <div className="ownCreationScrollBarMobile" ref={scrollBarMobile}>
     <ScrollBar

getScrollingPosition={scrollImagesMobile}

btnsDisplay={'none'}
btnsDisplayJustifyPosition={'end'}
btnsPosition={'inline-grid'} 
objectToDragWidth={scrollingBarMobileElmntWidth}
objectToDragHeight={30}
distanceWhereToDragWidth={scrollBarMobileWidth}
distanceWhereToDragHeight={scrollingBarElmntHeight}
calibrateScrollBar={calibrate}
color={'green'}

/>

    </div>

    </div>


  )
}

export default OwnCreation