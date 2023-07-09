import React, { useState } from 'react'
import stars from '../../containers/special-package/special-package-assets/stars.png'
import loop from '../../containers/special-package/special-package-assets/loop.png'
import furniture from '../../furniture.json'
import './scrollingProduct.css'

const ScrollingProduct = (

  {
   infoSectionBckColor,
   ProductNameFontSize,
   starsImgSize,
   seeDetailsFontSize
}

  ) => {

  

    const [seeDetailsIsClicked,setseeDetailsIsClicked]=useState(false)

  return (
  
    <div className="scrollingProduct">

        <div className="scrollingProduct-left">
          <img src={furniture.categoryProducts[4].image} 
          className='principalImage'/>
        </div>

        <div className="scrollingProduct-right" 
        style={{backgroundColor:infoSectionBckColor}}>

          <span className='productName' style={{fontSize:ProductNameFontSize}}>living room familty set </span>
          <span className='price'>$229.99</span>
          <img className='stars'src={stars} style={{width:starsImgSize}}/>
          <div className='seeDetails'>
            <p onClick={()=>setseeDetailsIsClicked(!seeDetailsIsClicked)} style={{fontSize:seeDetailsFontSize}}>See Details</p>
            {seeDetailsIsClicked && <p>{seeDetailsDescription}</p>}
            </div>
          <button className='loopBtn'>
            <img src={loop} alt="" />
          </button>

        </div>

    </div>


  )
}

export default ScrollingProduct