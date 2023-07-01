import React, { useState, useRef, useEffect } from "react";
import longerLine from "../scrollingBar/scrollingBarAssets/longerLine.png";
import shortLigne from "../scrollingBar/scrollingBarAssets/shortLine.png";

const ScrollingBar = (

  {objectToDragWidth,
    objectToDragHeight,
    distanceWhereToDragWidth,
    distanceWhereToDragHeight}) => {

  const [ismousClicked, setIsmousClicked] = useState(false);
  const [scrollingElmnOffsetX, setScrollingElmnOffsetX] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [objectToDragPosition, setobjectToDragPosition] = useState(0);
  const scrollbarContainer = useRef(null);
  const scrollbarElement = useRef(null)
  const [scrollBarPosition,setscrollBarPosition]=useState(0)
  const [scrollPosition,setScrollPosition]=useState(0)
  const [maxDistanceToScroll,setmaxDistanceToScroll]=useState(null)
  const [test1,setTest1] = useState(0)
  const [test2,setTest2] = useState(0)


  let scrollingPosition = cursor - scrollingElmnOffsetX - objectToDragPosition;
  

  console.log("cursor " + cursor);
  console.log("scrollingElmnOffsetX " + scrollingElmnOffsetX);
  console.log("position " + objectToDragPosition)
  console.log('scrollPosition',scrollPosition)
  console.log('maxDistanceToScroll',maxDistanceToScroll)
  //console.log(test1)
  
  
  


  function handleMouseclick(event) {

    setIsmousClicked(true);

    setScrollingElmnOffsetX(event.nativeEvent.offsetX);
    setCursor(event.nativeEvent.clientX);

   //determining the position of a scrollbar according to a viewport
   
   const scrollBarPosition = scrollbarContainer.current.getBoundingClientRect().left
   setscrollBarPosition(scrollingPosition)
   setobjectToDragPosition(scrollBarPosition)

   //setpermisbaleDistance(permisbaleDistance)
    const lengthOfScrollBar = scrollbarContainer.current.getBoundingClientRect().width
    const lengthofobjectToDrag = objectToDragWidth
    
    setmaxDistanceToScroll(lengthOfScrollBar-lengthofobjectToDrag)

    

  // setting the permisbale interval to drag a bar

  }



  function handleDrag(event) {

    event.preventDefault();
   
   

    if (ismousClicked) {
      
      
      setCursor(event.nativeEvent.clientX);
      
      //setScrollPosition(scrollbarElement.current.offsetLeft)
      
      setScrollPosition( Math.min( maxDistanceToScroll, Math.max(0,scrollingPosition) ) )
      //setScrollPosition(  Math.max(0,scrollingPosition) ) 
     
 

    }



  }

  const scrollBarLineContainer = {

    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '8.213vw',
   /* margin-left:18px;*/
    marginBottom: '4vh',
    marginTop: '9.4054vh'
}

  const objectToDragStyle = {

    display: "block",
    fontSize: "20px",
    width: objectToDragWidth+'px',
    height: objectToDragHeight+'px',
    position: "absolute",
    //transform: `translate(${scrollingPosition+10}px, ${0})`
    left: `${scrollPosition}px`

  }



  const distanceWhereToDrag = {

      width: distanceWhereToDragWidth+'px',
      height:distanceWhereToDragHeight+'px',
      
  }

  

  return (
    <div className="scrollingBar">
      <div style={scrollBarLineContainer} ref={scrollbarContainer}>
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
      {/*
      <div className="scrollingBtn">

        <div className="scrollingBtnUp">
          <img src="" alt="" /></div>
        <div className="scrollingBtnDown">
          <img src="" alt="" />
        </div>
      </div>
  */}
    </div>
  );
};

export default ScrollingBar;
