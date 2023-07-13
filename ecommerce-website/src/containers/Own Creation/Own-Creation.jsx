import React, { useEffect, useRef, useState } from 'react'
import ScrollBar from '../../components/scrollingBar/scroolingBar'
import './Own-Creation.css'
import furniture from '../../furniture.json'

const OwnCreation = () => {

const [scrollBarMobileWidth,setScrollBarMobileWidth]=useState(0)
const scrollBarMobile = useRef(null)
const gridOwnCreationImages = useRef(null)
const imageContainer = useRef(null)
const [translateImgs,settranslateImgs]=useState(0)
const [calibrate,setCalibrate]=useState(false)
const scrollingBarElmntWidth =84
const scrollingBarElmntHeight =5
const [slideImageWidth,setslideImageWidth]=useState(0)
    
useEffect(()=>{

// auto resize teh scrollbar when you resize the page
autoResizeScrollBar()
// get the positon of sliderImages according to the pageview
const getSlidingImageWidth = imageContainer.current.getBoundingClientRect().width
setslideImageWidth(prevImageWidth => getSlidingImageWidth)

window.addEventListener('resize',autoResizeScrollBar)

return () => window.removeEventListener('resize',autoResizeScrollBar) 


},[])


//console.log('slideImageWidth',slideImageWidth)
console.log('translateImgs',translateImgs)

function autoResizeScrollBar(){

    const PageViewPort = document.documentElement.clientWidth
    //setting the new scrollbar size of mobile version when you resize the page
    const scrollBarMobileOffsetX = scrollBarMobile.current.getBoundingClientRect().left
    setScrollBarMobileWidth(PageViewPort-scrollBarMobileOffsetX )
    
    setCalibrate(prev => !prev)
    
   
  }

function scrollImages (scrollPosition) {

const PageViewPort = document.documentElement.clientWidth;
// detemining the widht of whole container that contain images the container will be draging
const MobilegridOwnCreationImagesWidth = gridOwnCreationImages.current.clientWidth
// determinng the widht of non show grid 
const widthOfgridHiddenPart = MobilegridOwnCreationImagesWidth-PageViewPort
// determining the max distance the scrollBarCursor will move
const MaxScrollBarDistance = scrollBarMobileWidth - scrollingBarElmntWidth
const scrollingRatio = widthOfgridHiddenPart/MaxScrollBarDistance    
const scrollingElmntsPosition = scrollPosition*scrollingRatio
settranslateImgs(scrollingElmntsPosition)

    }


    
// this part is for styling elements

const ownCreationContainerStyle ={ 

    transform: `translateX(${-translateImgs}px)`,
}

function scalingImages (index){
    
const imageSlidePosition = slideImageWidth*index

/* 
imageSlidePosition is a position of an image according to its container
we multiplied by index becuase the images have the same width for example
the first image position is  slideImageWidth*index = 0  ==>  slideImageWidth=245 *index=0 so imageSlidePosition=0
the second image position is  slideImageWidth=245*1= 245
so by conicidence we determining the positon of image just by their width which is cool
*/

    
if(

 translateImgs >= imageSlidePosition 

 &&

 translateImgs <= imageSlidePosition+slideImageWidth

) return '1.05'

    return '1'
}


  return (


    <div className="ownCreationContainer" >

    <div className="ownCreationContainer-wrap" 
    ref={gridOwnCreationImages}
    style={ownCreationContainerStyle}
    >
     
     <div className="ownCreationLeft">
       
        <div className="wrap">
        <h2>Our Own Creation</h2>
        <h3>Designed in our studio</h3>
        <div className="more_scrollBar">
            <p>More</p>
            <div className="ownCreationScrollBarTabletDesktop" ref={scrollBarMobile}>
     <ScrollBar

getScrollingPosition={scrollImages}

btnsDisplay={'flex'}
btnsDisplayJustifyPosition={'end'}
btnsPosition={'inline-flex'} 
objectToDragWidth={30}
objectToDragHeight={30}
distanceWhereToDragWidth={150}
distanceWhereToDragHeight={scrollingBarElmntHeight}
calibrateScrollBar={calibrate}

/>

    </div>
            </div>

        </div>

     </div> 

     <div className="ownCreationRight">
      
       <div className="images"  >
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

getScrollingPosition={scrollImages}

btnsDisplay={'none'}
btnsDisplayJustifyPosition={'end'}
btnsPosition={'inline-grid'} 
objectToDragWidth={scrollingBarElmntWidth}
objectToDragHeight={30}
distanceWhereToDragWidth={scrollBarMobileWidth}
distanceWhereToDragHeight={scrollingBarElmntHeight}
calibrateScrollBar={calibrate}

/>

    </div>

    </div>


  )
}

export default OwnCreation