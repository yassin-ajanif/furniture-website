import React from 'react'

const PopularProduct = ({image,name,description,price}) => {


  return (

<div className="popularProduct">

    
    <img src={image}  />
    <div className="popularProduct-name">{name}</div>
    <div className="popularProduct-description">{description}</div>
    <div className="popularProduct-price">{price}</div>

</div>


  )
}

export default PopularProduct