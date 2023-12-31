import React, { useState } from 'react'
import stars from '../../containers/special-package/special-package-assets/stars.png'
import loop from '../../containers/special-package/special-package-assets/loop.png'

import './scrollingProduct.css'

const ScrollingProduct = (

  {
   infoSectionBckColor,
   ProductNameFontSize,
   starsImgSize,
   seeDetailsFontSize,
   image,
   productName,
   price,
   description,
   sendProductId,
   id
  
}

  ) => {

  

  return (
  
    <div className="scrollingProduct">

        <div className="scrollingProduct-left">
          <img src={image} 
          className='principalImage'
          />
        </div>

        <div className="scrollingProduct-right" 
        style={{backgroundColor:infoSectionBckColor}}>

        <div className="productName_price">
          <span className='productName' style={{fontSize:ProductNameFontSize}}>{productName}</span>
          <span className='price'>{price}</span>
        </div>

          <img className='stars'src={stars} style={{width:starsImgSize}}/>
          <div className='seeDetails'>
            <p onClick={()=>setseeDetailsIsClicked(!seeDetailsIsClicked)} style={{fontSize:seeDetailsFontSize}}>See Details</p>
            </div>
          <button className='loopBtn' onClick={()=>{sendProductId(id)}}>
            <img src={loop}  />
          </button>

        </div>

    </div>


  )
}

export default ScrollingProduct