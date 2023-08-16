
import React from 'react'
import furniture from '../../../furniture.json'
import '../product.css'
import { useDispatch } from 'react-redux'
import { addingProduct } from '../../../Slice'



const RoomKitchens = () => {

  const dispatch = useDispatch()

  function addToCart (image,price,productName) {
  
    console.log('romania')
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
    

    <div className="products-container">

      {furniture.RoomKitchens.map( kitchen => 
        
        

      <div className='product' key={Math.random()}> 
        <div className="image"><img src={kitchen.image}/></div>
        <div className="name">{kitchen.text}</div>
        <div className="price">{kitchen.price}</div>
        <button className="addToCart" 
        onClick={()=>{ 
          
  addToCart(kitchen.image,kitchen.price,kitchen.text) }}>

      Add To Cart</button>

      </div>
        
        )}

        

    </div>

  )
}

export default RoomKitchens