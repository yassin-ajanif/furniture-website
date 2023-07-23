import React, { useState, useRef, useEffect, useCallback } from "react";

import longerLine from "../scrollingBar/scrollingBarAssets/longerLine.png";
import shortLigne from "../scrollingBar/scrollingBarAssets/shortLine.png";
import circleRight from  "../scrollingBar/scrollingBarAssets/circleRight.png"
import circleLeft from  "../scrollingBar/scrollingBarAssets/circleLeft.png"
import arrowRight from  "../scrollingBar/scrollingBarAssets/arrowRight.png"
import arrowLeft from  "../scrollingBar/scrollingBarAssets/arrowLeft.png"


const ScrollingBar = (

  { className,
    objectToDragWidth,
    objectToDragHeight,
    distanceWhereToDragWidth,
    distanceWhereToDragHeight,
    btnsPosition,
    btnsDisplay,
    btnsDisplayJustifyPosition,
    calibrateScrollBar,
    getScrollingPosition,
    marginBtns,
    color
   
    
  }) => {

  const [ismousClicked, setIsmousClicked] = useState(false);
  const [scrollingElmnOffsetX, setScrollingElmnOffsetX] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [objectToDragPosition, setobjectToDragPosition] = useState(0);
  const scrollbarContainer = useRef(null);
  const scrollbarElement = useRef(null)
  const [scrollBarPosition,setscrollBarPosition]=useState(0)
  const [scrollPosition,setScrollPosition]=useState(0)
  const [maxDistanceToScroll,setmaxDistanceToScroll]=useState(null)
  const [calibrate,setcalibrate]=useState(true)


  let scrollingPosition = cursor - scrollingElmnOffsetX - objectToDragPosition;
  const remainingPosition= maxDistanceToScroll-scrollPosition
  
  

 useEffect(()=>{

 calibartionOfScrollBar()

 getScrollingPosition(scrollPosition)
 

 },[calibrateScrollBar,scrollPosition])





  function calibartionOfScrollBar(){

    
 
    const lengthOfScrollBar = scrollbarContainer.current.getBoundingClientRect().width
    const ScrollbarIsexisting = lengthOfScrollBar>0
   
    if(ScrollbarIsexisting){

    const lengthofobjectToDrag = objectToDragWidth
    const getMaxDistanceToScroll = lengthOfScrollBar-lengthofobjectToDrag
    setmaxDistanceToScroll(getMaxDistanceToScroll)

   setScrollPosition(Math.min(scrollPosition,getMaxDistanceToScroll))
  
  
   console.log('lengthOfScrollBar',lengthOfScrollBar)
   console.log('lengthofobjectToDrag',lengthofobjectToDrag)
   console.log('maxDistanceToScroll',maxDistanceToScroll)
   console.log('scrollPosition',scrollPosition)
   console.log('-------------')
   
  }

  }
  

  function handleMouseclick(event) {

    event.preventDefault();
    
    calibartionOfScrollBar()

    setIsmousClicked(true);

    setScrollingElmnOffsetX(event.nativeEvent.offsetX);
    setCursor(event.nativeEvent.clientX);

   //determining the position of a scrollbar according to a viewport
   
   const scrollBarPosition = scrollbarContainer.current.getBoundingClientRect().left
   setscrollBarPosition(scrollingPosition)
   setobjectToDragPosition(scrollBarPosition)
   

  }


  function handleDrag(event) {

   
    if (ismousClicked) {
      
      
      setCursor(event.nativeEvent.clientX);
      
      setScrollPosition( Math.min( maxDistanceToScroll, Math.max(0,scrollingPosition) ) )
      

    }

  }

  function handleClickRightBottom(){

    calibartionOfScrollBar()
    
    if(objectToDragWidth>=remainingPosition) 
    {
    setScrollPosition(maxDistanceToScroll) }

    else {setScrollPosition(scrollPosition+objectToDragWidth)} 
  }
  

  function handleClickLeftTop(){
  
   calibartionOfScrollBar()

    if(scrollPosition<=objectToDragWidth){setScrollPosition(0)}
    else{setScrollPosition(scrollPosition-objectToDragWidth)}

    
  }

  
  

  // these is for line and object scrolling styling

  const scrollingBarStyle = {

    display: btnsPosition,
    alignItems: 'center',
    paddingBlock:'50px'

  }

  const scrollBarLineContainer = {

    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    height:objectToDragHeight+'px'
  
}

  const objectToDragStyle = {
    
   
    width: objectToDragWidth+'px',
    height: objectToDragHeight+'px',
    position: "absolute",
    left: `${scrollPosition}px`,
    backgroundColor:color

  }



  const distanceWhereToDrag = {

      width: distanceWhereToDragWidth+'px',
      height:distanceWhereToDragHeight+'px',
      
  }

  // these for button styles

  

  const scrollingBarBtns = {
    
    display:btnsDisplay,
    justifySelf:btnsDisplayJustifyPosition,
    gap:'14px',
    margin:marginBtns

  }

  const scrollingBtnUpStyle = {

    position: 'relative',
    display: 'flex' ,
    width: 'max-content',
    height: 'max-content',
   
  }

  const scrollingBtnDownStyle = {

    position: 'relative',
    display: 'flex' ,
    width: 'max-content',
    height: 'max-content',
  }
  
  const circleLeftStyle = {

    
  }

  const arrowLeftStyle = {

    position: 'absolute',
    inset: '0',
    margin:'auto'
  }
  
  const circleRightStyle = {}

  const arrowRightStyle = {

    position:'absolute',
    inset:'0',
    margin:'auto'
  }


  return (


    <div style={scrollingBarStyle} 
       
        onMouseUp={() => { setIsmousClicked(false);}}
        onMouseMove={handleDrag}
        onMouseLeave={() => setIsmousClicked(false)}
    >
     
      <div style={scrollBarLineContainer} 
           ref={scrollbarContainer}
           >

        <img style={distanceWhereToDrag} src={longerLine} />

      
        <div
          ref={scrollbarElement}
          style={objectToDragStyle}
          onMouseDown={handleMouseclick}
        ></div>
      

      </div>

      
      <div style={scrollingBarBtns}>

        <div style={scrollingBtnUpStyle}
             onMouseDown={calibartionOfScrollBar}
             onMouseUp={handleClickLeftTop}>
          <img src={circleLeft} style={circleLeftStyle}  />
          <img src={arrowLeft} style={arrowLeftStyle}  />
        </div>


        <div style={scrollingBtnDownStyle}
              onMouseDown={calibartionOfScrollBar}
              onMouseUp={handleClickRightBottom}>
          <img src={circleRight} style={circleRightStyle} alt="" />
          <img src={arrowRight} style={arrowRightStyle} alt="" />
        
      </div>
  
    </div>
        
  

    </div>

  
  );
};

export default ScrollingBar;
