import React,{ useState } from "react"
import './popular-products.css'
import furniture from '../../furniture.json'
import PopularProduct from '../../components/PopularProduct'
import ScrollingBar from '../../components/scrollingBar/scroolingBar'


const PopularProducts = () => {

    return (

    <div className="popularProducts">

      <h2 className="popularProducts-title">Popular Products</h2>
      <div className="popular-products-images">
        {furniture.popularProducts.map(
          item => <PopularProduct image={item.image} name={item.name} description={item.description} price={item.price}/>)}
      </div>
      <ScrollingBar
        
        objectToDragWidth={83}
        objectToDragHeight={29}
        distanceWhereToDragWidth={1000}
        distanceWhereToDragHeight={5}

      
      />
      <button >Explore all items</button>

    </div>

  )
}

export default PopularProducts