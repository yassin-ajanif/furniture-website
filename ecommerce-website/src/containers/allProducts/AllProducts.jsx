import React from 'react'
import furniture from '../../furniture.json'
import './AllProducts.css'
import { useDispatch } from 'react-redux'
import { addingProduct } from '../../Slice'
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

 const FirstThreeProducts = ({typeOfProducts}) => {
  // we're going to show 3 product of each category in allProducts page
    return  typeOfProducts.slice(0,3).map( 

    (product,index)=>    <div className='product' key={index}> 
    <div className="image"><img src={product.image}/></div>
    <div className="name">{product.text}</div>
    <div className="price">{product.price}</div>
    <button className="addToCart"
     onClick={()=>{ 
      
      addToCart(product.image,product.price,product.text) }}
    >Add To Cart</button>
     </div> )

}

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

    <div className="allProducts">

        <div className="bedrooms">
            <h2>Bedrooms</h2>
       <div className="products-container">
 
       <FirstThreeProducts typeOfProducts={furniture.Bedrooms}/>
    
            </div>

            <button className='allproductsBtn'
            onClick={()=>navigate('/Bedrooms')}>See More Bedrooms</button>
        </div>

         <div className="dinningRooms">
            <h2>DinningRooms</h2>
            <div className="products-container">
            <FirstThreeProducts typeOfProducts={furniture.DinningRooms}/>
            </div>
            <button className='allproductsBtn'
            onClick={()=>navigate('/DinningRooms')}>See More DinningRooms</button>

        </div> 

        <div className="meetingRooms">
            <h2>LivingRooms</h2>
            <div className="products-container">
            <FirstThreeProducts typeOfProducts={furniture.LivingRooms}/>
            </div>
            <button className='allproductsBtn'
            onClick={()=>navigate('/LivingRooms')}>See More LivingRooms</button>
        </div>

        <div className="workspaces">
            <h2> MeetingRooms </h2>
            <div className="products-container">
            <FirstThreeProducts typeOfProducts={furniture.MeetingRooms}/>

            </div>
            <button className='allproductsBtn'
            onClick={()=>navigate('/MeetingRooms')}>See More MeetingRooms</button>
        </div>

        <div className="LivingRooms">
            <h2>RoomKitchens</h2>
            <div className="products-container">
            <FirstThreeProducts typeOfProducts={furniture.RoomKitchens}/>

            </div>
            <button className='allproductsBtn'
            onClick={()=>navigate('/RoomKitchens')}>See More RoomKitchens</button>

        </div>

        <div className="roomKitchens">
            <h2>WorkSpaces</h2>
            <div className="products-container">
            <FirstThreeProducts typeOfProducts={furniture.WorkSpaces}/>

            </div>
            <button className='allproductsBtn'
            onClick={()=>navigate('/Workspaces')}>See More WorkSpaces</button>

        </div>

    </div>

  )
}

export default AllProducts