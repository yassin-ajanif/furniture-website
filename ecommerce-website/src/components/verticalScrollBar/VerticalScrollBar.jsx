import React , {useEffect,useState,useRef}from 'react'
import './VerticalScrollBar.css'
import circleUp from './verticalScrollingBar-assets/circleUp.png'
import circleDown from './verticalScrollingBar-assets/circleDown.png'
import arrowUp from './verticalScrollingBar-assets/arrowUp.png'
import arrowDown from './verticalScrollingBar-assets/arrowDown.png'

const VerticalScrollBar = ({scrollBarHeight,getScrollingPosition,HeightOfScrollingElmnt}) => {

const scrollBar = useRef(null)
const [mouseIsDown,setMouseIsDown]=useState(false)
const [scrollPosition,setScrollPosition]=useState(0)
const dragingElementHeight = HeightOfScrollingElmnt
 



   
function sendScrollPosoitionToParent(){

  getScrollingPosition(scrollPosition)
   
}

function handleMouseDown(event){
    
    event.preventDefault()
    setMouseIsDown(true)

}

function handleMouseMove(event){

  if(mouseIsDown){

    const cursorPosition=event.clientY
    const getoffsetY = scrollBar.current.getBoundingClientRect().top  
    const getscrollingElmnPos = cursorPosition-getoffsetY-dragingElementHeight/2
    const scrollBarHeights = 183
    const MaxDistanceToScroll=scrollBarHeight-dragingElementHeight
    const DistanceToScroll= Math.max(0,Math.min(getscrollingElmnPos,MaxDistanceToScroll))
    setScrollPosition(DistanceToScroll)
    sendScrollPosoitionToParent()

  }

 

}
     

function handleMouseUp(){

  setMouseIsDown(false)
}

function handleMouseLeave(){
  setMouseIsDown(false)
  
}

function goDown(){
  
  const MaxDistanceToScrollDown=scrollBarHeight-dragingElementHeight
  const remainingDistanceToScrollDown = scrollBarHeight-scrollPosition-dragingElementHeight/2
  

  if(remainingDistanceToScrollDown>dragingElementHeight){

    setScrollPosition(scrollPosition+dragingElementHeight)
  }

  else{   setScrollPosition(MaxDistanceToScrollDown)  }

  sendScrollPosoitionToParent()

}


function goUp(){

  
  if(scrollPosition>dragingElementHeight){

    setScrollPosition(scrollPosition-dragingElementHeight)
  }

  else{  setScrollPosition(0)  }

  sendScrollPosoitionToParent()

}

// this thing here is for styling

const scrollBarCursor = {

  transform:`translate(0,${scrollPosition}px)`
  

}

const scrollBarRoadStyle={

  height:`${scrollBarHeight}px`
  
}

  return (

<div className="VerticalScrollBar-container">
       
        <div className="VerticalScrollBar" ref={scrollBar}>

        <div className="scrollBarRoad" style={scrollBarRoadStyle}></div>

        <div 
        style={scrollBarCursor}
        className="scrollBarElmnt"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ></div>
        
</div>

        <div className="btnsScrollBar">
          <div className="btnUp" onClick={goUp}>
            <img className='cricle' src={circleUp}  />
            <img className='arrow' src={arrowUp}  />
          </div>
          <div className="btnDown" onClick={goDown}>
            <img className='cricle' src={circleDown}  />
            <img className='arrow' src={arrowDown}  />
          </div>
        </div>

    </div>   

  )
}

export default VerticalScrollBar