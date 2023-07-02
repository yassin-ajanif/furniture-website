import React, { useState, useRef, useEffect } from "react";
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
  


  let scrollingPosition = cursor - scrollingElmnOffsetX - objectToDragPosition;
  const remainingPosition= maxDistanceToScroll-scrollPosition
  


  console.log("cursor " + cursor);
  console.log("scrollingElmnOffsetX " + scrollingElmnOffsetX);
  console.log("position " + objectToDragPosition)
  console.log('scrollPosition',scrollPosition)
  console.log('maxDistanceToScroll',maxDistanceToScroll)
  console.log('objectwidth',objectToDragWidth)
  console.log('remaining',remainingPosition)
  console.log(distanceWhereToDragWidth)
 
 
  useEffect(() => {

    const handleResize = () => {

      calibartionOfScrollBar()
      setScrollPosition(0)
      console.log('resizing')
    };

    window.onresize = handleResize;

    return () => {
      // Clean up the event listener on component unmount
      window.onresize = null;
    };
  }, []);

 
 


  function calibartionOfScrollBar(){

    const lengthOfScrollBar = scrollbarContainer.current.getBoundingClientRect().width
    const lengthofobjectToDrag = objectToDragWidth
    setmaxDistanceToScroll(lengthOfScrollBar-lengthofobjectToDrag)
  
  }
  

  function handleMouseclick(event) {

    setIsmousClicked(true);

    setScrollingElmnOffsetX(event.nativeEvent.offsetX);
    setCursor(event.nativeEvent.clientX);

   //determining the position of a scrollbar according to a viewport
   
   const scrollBarPosition = scrollbarContainer.current.getBoundingClientRect().left
   setscrollBarPosition(scrollingPosition)
   setobjectToDragPosition(scrollBarPosition)
   
    calibartionOfScrollBar()
    


  }



  function handleDrag(event) {

    event.preventDefault();
   
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
    alignItems: 'center'

  }

  const scrollBarLineContainer = {

    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
  
}

  const objectToDragStyle = {

    display: "block",
    fontSize: "20px",
    width: objectToDragWidth+'px',
    height: objectToDragHeight+'px',
    position: "absolute",
    left: `${scrollPosition}px`

  }



  const distanceWhereToDrag = {

      width: distanceWhereToDragWidth+'px',
      height:distanceWhereToDragHeight+'px',
      
  }

  // these for button styles

  

  const scrollingBarBtn = {
    
    display:btnsDisplay,
    justifySelf:btnsDisplayJustifyPosition

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


    <div style={scrollingBarStyle}>
     
      <div style={scrollBarLineContainer} 
           ref={scrollbarContainer}
           >
        <img style={distanceWhereToDrag} src={longerLine} />

        <img
          ref={scrollbarElement}
          src={shortLigne}
          style={objectToDragStyle}
          onMouseDown={handleMouseclick}
         // onClick={test}
          onMouseUp={() => {
            setIsmousClicked(false);
          }}
          onMouseMove={handleDrag}
          onMouseLeave={() => setIsmousClicked(false)}
        />
      </div>

      
      <div style={scrollingBarBtn}>

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
