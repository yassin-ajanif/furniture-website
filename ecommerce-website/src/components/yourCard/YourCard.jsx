import React, { useState,useEffect,useRef } from 'react'
import './yourCard.css'
import furniture from '../../furniture.json'
import minus from './yourCard-assets/minus.png'
import plus from './yourCard-assets/plus.png'
import close from './yourCard-assets/close.png'
import { useSelector,useDispatch } from 'react-redux'
import { removingProduct,incrementQuantity,
  decrementQuantity,upadateTotalBill, incrementProductNumber } from '../../Slice'

 


const YourCard = () => {

  
  const pickedProducts = useSelector( state => state.yourCard.addedProducts)
  const [TotalToPay,setTotalToPay]=useState(0)
  const intialized = useRef(false)
  const dispatch = useDispatch()
  const thereIsNoProduct= pickedProducts.length===0
 
  function AddedProduct ({image,price,name,quantity,id}) {
   
    
   const totalPrice = 
   useSelector(state=>state.yourCard.addedProducts[id].total)
     

   function deleteProductFromCard (name){

     dispatch(removingProduct(name))
   }   
   function increaseQuantity(){

    dispatch(incrementQuantity(id))

   }
   function decreaseQuantity(){
    dispatch(decrementQuantity(id))
   }

  
   return (
     
  <>
      <tr>

        <td>
          <div className="product-container">
           <div className="image"><img src={image}/></div>
           <div className="name">{name}</div>
           <div className="close" onClick={()=>deleteProductFromCard(name)}>
            <img src={close} /></div>
          </div>
        </td>

        <td className='price'>{price} </td>

        <td>
          <div className="quantity">
          <div className='decrement'
             onClick={decreaseQuantity}>
              <img src={minus} /></div>
            <div className='quantityValue'>{quantity}</div>
              <div className='increment' 
              onClick={increaseQuantity}>
              <img src={plus} /></div>
          </div>
          </td>

        <td className='total'>{`$${totalPrice}`}</td>

      </tr>
      
      <tr >
       <td  colSpan='4' className='line-divider'>
        <hr />
       </td>
       </tr>


       </>
        
    )

 }


 // we're ging to filter repeated products if a user click on them more than once

   const filtredPickedProducts = 

   pickedProducts.filter(
    
(product,index)=>pickedProducts.findIndex(object=>object.productName===product.productName)===index

   )


 const productsLists =  

 filtredPickedProducts.map( (product,index) => 
   
   < AddedProduct 
     image={product.image}
     name={product.productName}
     price={product.priceAsNumber}
     quantity={product.quantity}
     key={crypto.randomUUID()}
     id={index}
   />) 
   
   useEffect(()=>{
      
    console.log('working')
    // reset the state to zero
    setTotalToPay(0)
      
    filtredPickedProducts.map( 
      
      product =>  setTotalToPay( prev =>
       {
       //console.log('prev',prev) 
       //console.log('product.total',product.total) 
       return   prev+product.total;

      }
        )
      
      )

   },[pickedProducts])

    
  return (

    <div className="YourCard">
       
    <table>

      <thead>

       <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
       </tr>

      </thead>
      
      <tbody>

      {productsLists}
      
      { thereIsNoProduct ? <tr><td colSpan='3'>you have no product in your cart</td></tr> :
      <tr>
        <td colSpan='3'>
          <button className='ProccedToCheckOut'>Procced To CheckOut</button>
          </td>
        <td className='totalBill'>{'$'+TotalToPay}</td>
      </tr>
      }
      
      </tbody>
      
    
    </table>

   
    
    </div>
  )
}

export default YourCard