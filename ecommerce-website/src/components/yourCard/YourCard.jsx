import React from 'react'
import './yourCard.css'
import furniture from '../../furniture.json'
import minus from './yourCard-assets/plus.png'
import plus from './yourCard-assets/minus.png'
import close from './yourCard-assets/close.png'
import { useSelector } from 'react-redux'

const YourCard = () => {


  const pickedProducts = useSelector( state => state.yourCard.addedProducts)


  function AddedProduct ({image,price,name}) {

   const imageTest = furniture.specialPackageProducts[0].image
   const priceTest = furniture.specialPackageProducts[0].price
    
   return (
     
  <>
      <tr>

        <td>
          <div className="product-container">
           <div className="image"><img src={image}/></div>
           <div className="name">{name}</div>
           <div className="close"><img src={close} /></div>
          </div>
        </td>

        <td className='price'>{price} </td>

        <td>
          <div className="quantity">
            <div className='increment'>
              <img src={plus} /></div>
            <div className='quantityValue'>0</div>
            <div className='decrement'>
              <img src={minus} /></div>
          </div>
          </td>

        <td className='total'>{price}</td>

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


 function filterPickedProducts (){

   

 }

 const productsLists =  

   pickedProducts.map( product => 
   
   < AddedProduct 
     image={product.image}
     name={product.productName}
     price={product.price}
     key={crypto.randomUUID()}

   />) 
      
 
  
  
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
      
      
  

      </tbody>
      
    
    </table>

   
    
    </div>
  )
}

export default YourCard