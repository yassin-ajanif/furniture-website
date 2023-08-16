import React from 'react'
import furniture from '../../../furniture.json'
import '../product.css'
import { useDispatch } from 'react-redux'
import { addingProduct } from '../../../Slice'


 

const Bedrooms = () => {

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

      {furniture.Bedrooms.map( Bedroom => 
        
      <div className='product'> 
        <div className="image"><img src={Bedroom.image}/></div>
        <div className="name">{Bedroom.text}</div>
        <div className="price">{Bedroom.price}</div>
        <button className="addToCart"
         onClick={()=>{ 
          
          addToCart(Bedroom.image,Bedroom.price,Bedroom.text) }}
        >Add To Cart</button>
      </div>
        
        )}

        

    </div>

  )
}

export default Bedrooms