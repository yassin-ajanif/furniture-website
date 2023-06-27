import React, { useState } from 'react'
import longerLine from '../scrollingBar/scrollingBarAssets/longerLine.png'
import shortLigne from '../scrollingBar/scrollingBarAssets/shortLine.png'

const ScrollingBar = () => {

  const [ismousClicked,setIsmousClicked] = useState(false)
  const [refPos,setrefPos]=useState(0)
  const [cursor,setCursor] = useState(refPos)
  
 
    console.log('refPos '+refPos)
    console.log('cursor '+cursor)

  function handleMouseclick(event){

    setIsmousClicked(true); 
    // fixing the refrence position
   /* if(cursor===0) {

          setrefPos(event.clientX)
         setCursor(event.clientX)
        }*/
  
  }  

  function handleDrag(event){

   event.preventDefault()

    if(ismousClicked ) {

      
    setCursor(event.clientX)
    
    

    }
  }

  

  const elementStyle = {

    display:'block',
    fontSize:'20px',
    width: '83px',
    height: '19px',
    position: 'absolute' ,
    transform: `translate(${cursor-80}px, ${0})`,
    

  }

  return (

    <div className="scrollingBar">

      <div className="scrollingBarLine">

        <img className='longerLine' src={longerLine}  />
        
      
        <img  src={shortLigne} 
              
              style={elementStyle}
      
  onMouseDown= {handleMouseclick} 
  onMouseUp={()=> {setIsmousClicked(false);}}
  onMouseMove={handleDrag}
  onMouseLeave={()=>setIsmousClicked(false)}
        
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
  */ }
    </div>

  )

}

export default ScrollingBar