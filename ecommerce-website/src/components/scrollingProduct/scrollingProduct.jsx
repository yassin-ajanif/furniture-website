import React, { useState } from 'react'
import stars from '../../containers/special-package/special-package-assets/stars.png'
import loop from '../../containers/special-package/special-package-assets/loop.png'
import furniture from '../../furniture.json'
import './scrollingProduct.css'

const ScrollingProduct = () => {

    const [seeDetailsIsClicked,setseeDetailsIsClicked]=useState(false)

  return (
  
    <div className="scrollingProduct">

        <div className="scrollingProduct-left">
          <img src={furniture.categoryProducts[4].image} 
          className='principalImage'/>
        </div>

        <div className="scrollingProduct-right">

          <span className='productName'>living room familty set </span>
          <span className='price'>$229.99</span>
          <img className='stars'src={stars} />
          <div className='seeDetails'>
            <p onClick={()=>setseeDetailsIsClicked(!seeDetailsIsClicked)}>See Details</p>
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