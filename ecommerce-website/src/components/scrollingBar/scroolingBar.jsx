import React, { useState, useRef, useEffect } from "react";
import longerLine from "../scrollingBar/scrollingBarAssets/longerLine.png";
import shortLigne from "../scrollingBar/scrollingBarAssets/shortLine.png";

const ScrollingBar = () => {

  const [ismousClicked, setIsmousClicked] = useState(false);
  const [smothDrag, setsmothDrag] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [dragingElmnPos, setdragingElmnPos] = useState(0);
  const scrollbarContainer = useRef(null);
  const [ifScrollBarInScope,setifScrollBarInScope]=useState(true)
  const [scrollBarPosition,setscrollBarPosition]=useState(0)
  const [permisbaleDistance,setpermisbaleDistance]=useState(0)

  let scrollingPosition = cursor - smothDrag - dragingElmnPos;

  console.log("smothDrag " + smothDrag);
  console.log("cursor " + cursor);
  console.log("position " + dragingElmnPos);
  console.log("scrollingPosition " + scrollingPosition);
  console.log('condition',ifScrollBarInScope)


  function handleMouseclick(event) {
    setIsmousClicked(true);

    setsmothDrag(event.nativeEvent.offsetX);
    setCursor(event.nativeEvent.clientX);

   //determining the position of a scrollbar according to a viewport
   
   const scrollBarPosition = scrollbarContainer.current.getBoundingClientRect().left;
   const permisbaleDistance = scrollbarContainer.current.getBoundingClientRect().width 
     
   setscrollBarPosition(scrollingPosition)
   setdragingElmnPos(scrollBarPosition);
   /*setpermisbaleDistance(permisbaleDistance)*/
     
  // setting the permisbale interval to drag a bar

  }

  function test(event){

    setsmothDrag(event.nativeEvent.offsetX);
    setCursor(event.nativeEvent.clientX);
    const scrollBarPosition = 
    scrollbarContainer.current.getBoundingClientRect().left;     
   
   setdragingElmnPos(scrollBarPosition);

  }

  function handleDrag(event) {

    event.preventDefault();

    if (ismousClicked ) {
      
      setCursor(event.nativeEvent.clientX);
      setscrollBarPosition(scrollingPosition)
 

    }



  }

  const elementStyle = {
    display: "block",
    fontSize: "20px",
    width: "83px",
    height: "29px",
    position: "absolute",
    transform: `translate(${scrollingPosition}px, ${0})`
  };

  return (
    <div className="scrollingBar">
      <div className="scrollingBarLine" ref={scrollbarContainer}>
        <img className="longerLine" src={longerLine} />

        <img
          className="short"
          src={shortLigne}
          style={elementStyle}
          onMouseDown={handleMouseclick}
         /* onClick={test}*/
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
