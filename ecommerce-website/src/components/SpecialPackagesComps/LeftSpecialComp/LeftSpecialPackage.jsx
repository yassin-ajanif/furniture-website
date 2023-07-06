
import React from 'react'
import './LeftSpecialComp.css'

const LeftSpecialPackage = (
  {
    image,
    name,
    price,
    description,
    expandImage,
    ratingStars,
    trolley

  }) => {
  
    return (

    <div className="LeftSpecialPackage">

      <div className="LeftSpecialPackage_image">
       <img className='image' src={image} alt="" />
       <button className="expand_image_icon">
        <img src={expandImage} alt="" />
       </button>
    </div>
    
        <div className="specialPackageLeftInfos">
            <div className="specialPackageLeftInfos_right">
          <p className='name'>{name}</p>
          <div className="stars">
          <img src={ratingStars} className="stars" />
          </div>
          <p className='price'>{price}</p>
          </div>
            <div className="specialPackageLeftInfos_left">
            <button >
                <p>Add to Cart</p>
                <img src={trolley} alt="" className="cart" />
            </button>
          
          <div className="description-mobileTablet">
            <p className='description-title'>Description</p>
            <p className="description-content">{description}</p>
          </div>
          </div>
    </div>  

    </div>
  )
}

export default LeftSpecialPackage