import React,{ useState,useEffect,useRef } from "react"
import './popular-products.css'
import furniture from '../../furniture.json'
import PopularProduct from '../../components/PopularProduct'
import ScrollingBar from '../../components/scrollingBar/scroolingBar'


const PopularProducts = () => {

 const [popularGridImgWidth,setpopularGridImgWidth]=useState(null)
 const popularImgGrid = useRef(null)
 const [popularProductWidth,setpopularProductWidth]=useState(null)
 const numberOfProducts = furniture.popularProducts.length
 const show='flex'
 const hide='none'
 const scrollBar= useRef(null)
 const [scrollBarOffsetX,setscrollBarOffsetX]=useState(0)
 const pageViewPort =  document.documentElement.clientWidth
 const scrollBarWidth=pageViewPort-scrollBarOffsetX

 


 useEffect(()=>{ 
  
  const getPopularImageGridWidth= popularImgGrid.current.getBoundingClientRect().width
  setpopularGridImgWidth(getPopularImageGridWidth) 
  const getPopularProductWidth =getPopularImageGridWidth/numberOfProducts
  setpopularProductWidth(getPopularProductWidth)
  const getscrollBarOffsetX = scrollBar.current.getBoundingClientRect().left
  setscrollBarOffsetX(getscrollBarOffsetX)
}
  
  ,[])




    return (

    <div className="popularProducts" >

      <h2 className="popularProducts-title">Popular Products</h2>
      <div className="popular-products-images" 
      ref={popularImgGrid}
      >
        {furniture.popularProducts.map(
          item => <PopularProduct image={item.image} name={item.name} description={item.description} price={item.price}/>)}
      </div>

    <div className="scrollBarContainer-mobile-tablet" ref={scrollBar}>
      <ScrollingBar 
        btnsDisplay={hide}
        btnsDisplayJustifyPosition={'end'}
        btnsPosition={'inline-grid'} 
        objectToDragWidth={popularProductWidth/3}
        //objectToDragWidth={183}
        objectToDragHeight={12}
        distanceWhereToDragWidth={scrollBarWidth}
        distanceWhereToDragHeight={5}
        
        />
    </div>   

   <div className="scrollBarContainer-desktop">
    <ScrollingBar 
        btnsDisplay={show}
        btnsDisplayJustifyPosition={'end'}
        btnsPosition={'inline-grid'} 
        objectToDragWidth={popularProductWidth/3}
        //objectToDragWidth={183}
        objectToDragHeight={12}
        distanceWhereToDragWidth={scrollBarWidth}
        distanceWhereToDragHeight={5}
        />
  </div>
        

      <button  >Explore all items</button>

    </div>

  )
}

export default PopularProducts