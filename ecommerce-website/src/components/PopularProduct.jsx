import React from 'react'
import { useDispatch } from 'react-redux'
import { addingProduct } from "../Slice";


const PopularProduct = ({image,name,description,price}) => {

  const dispatch = useDispatch()

  function addToCart (image,price,productName) {
  
    // set the quantity and Total intial values to send them through dispatch with product data
   const quantity = 1
   
  // we have price as  string we want to convert it to a number and remove $ sign before send it to reducer
    const sliceDollarSignFromPrice = price.slice(1)
    const priceAsNumber = Number(sliceDollarSignFromPrice)
    // set the total price when you add products
    const total = priceAsNumber
    
  
    dispatch(addingProduct({image,priceAsNumber,productName,quantity,total}))
  
  
  }
  return (

<div className="popularProduct">

    
    <img src={image}  />
    <div className="popularProduct-name">{name}</div>
    <div className="popularProduct-description">{description}</div>
    <div className='price-addToCart'>
    <span className="popularProduct-price">{price}</span>
    <button className='addToCart'
    onClick={()=>{addToCart(image,price,name)}}>Add To Cart</button>
    </div>

</div>


  )
}

export default PopularProduct