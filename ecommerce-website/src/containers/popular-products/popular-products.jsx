import React,{ useState } from "react"
import './popular-products.css'
import furniture from '../../furniture.json'
import PopularProduct from '../../components/PopularProduct'
import ScrollingBar from '../../components/scrollingBar/scroolingBar'


const PopularProducts = () => {

  const [mouseisClicked,setmouseisClicked]=useState(false)
  const [mouseisMoved,setmouseisMoved]=useState(false)
  const [test,setTest]=useState(false)
  


  function handleMouseMove(event){
    
    if(mouseisClicked ) {

     setTest(true)
    console.log(event.clientX)

  }

  else {setTest(false)}
    
}

  

    return (

    <div className="popularProducts">

      <h2 className="popularProducts-title">Popular Products</h2>
      <div className="popular-products-images">
        {furniture.popularProducts.map(
          item => <PopularProduct image={item.image} name={item.name} description={item.description} price={item.price}/>)}
      </div>
      <ScrollingBar/>
      <button onMouseDown = {()=>setmouseisClicked(true)}
              onMouseMove={handleMouseMove}
              onMouseUp = {()=>setmouseisClicked(false)} 
              onMouseLeave={() =>{ setTest(false); 
                setmouseisClicked(false)} }

             
      style={{backgroundColor: test ? 'red' : ''}}>Explore all items</button>

    </div>

  )
}

export default PopularProducts