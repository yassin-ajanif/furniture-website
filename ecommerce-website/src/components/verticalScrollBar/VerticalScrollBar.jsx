import React , {useEffect,useState,useRef}from 'react'
import './VerticalScrollBar.css'


const VerticalScrollBar = () => {

const scrollBar = useRef(null)
const [offsetY,setoffsetY]=useState(0)

    useEffect(()=>{
     
    const getoffsetY = scrollBar.current.getBoundingClientRect().top 
     setoffsetY(getoffsetY)   
     console.log(getoffsetY)  

    },[])


function handleMouseDown(event){
    
    const cursorPosition=event.clientY
    const scrollingElmnPos = cursorPosition-offsetY
    /*console.log('cursorPosition',cursorPosition)
    console.log(scrollBar.current.getBoundingClientRect().top)
    console.log('window.scrollY',window.scrollY)
    console.log('scrollingElmnPos',scrollingElmnPos)*/
   
}
function handleMouseUp(){}
function handleMouseMove(){}
function handleMouseLeave(){}

  return (

<div className="VerticalScrollBar-container">
       
        <div className="VerticalScrollBar" ref={scrollBar}>

        <div className="scrollBarRoad"></div>

        <div 
        className="scrollBarElmnt"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ></div>
        
</div>

    </div>   

  )
}

export default VerticalScrollBar