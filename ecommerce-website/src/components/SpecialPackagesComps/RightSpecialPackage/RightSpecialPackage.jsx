import React from 'react'
//import arrowDown from '../../containers/special-package/special-package-assets'
import './RightSpecialPackage.css'

const RightSpecialPackage = ({expandImage,name,price,ratingStars,image}) => {

  return (

    <div className="RightSpecialPackage">

        <div className="RightSpecialPackage_left">
            <img src={image} alt="" />
          </div>

          <div className="RightSpecialPackage_right">
            <span>{name}</span>
            <span>{price}</span>
            <div className="stars">
               <img src={ratingStars} alt="" />
            </div>
            <div>See Details</div>  
            <div className="expandImage">
              <img src={expandImage} alt="" />
            </div>
          </div>
  
    </div>

  )
}

export default RightSpecialPackage

