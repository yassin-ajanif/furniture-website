import React from 'react'
import longerLine from '../scrollingBar/scrollingBarAssets/longerLine.png'
import shortLigne from '../scrollingBar/scrollingBarAssets/shortLine.png'

const ScrollingBar = () => {

  function handleDrag (event) {

     console.log(event.clientX)

  }

  return (

    <div className="scrollingBar">

      <div className="scrollingBarLine">

        <img className='longerLine' src={longerLine}  />
        <img  className='shorterLine' src={shortLigne} 
         onMouseDown={handleDrag}/>

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