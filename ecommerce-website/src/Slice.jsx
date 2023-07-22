import {createSlice} from '@reduxjs/toolkit'

const initialState = { 

    ProductsCount:0,
    addedProducts:[],
    
}

const CardSlice = createSlice({

name:'card',
initialState,
reducers: {

    incrementProductNumber: (state)=>{state.ProductsCount++},

    decrementProductNumber: (state)=>{state.ProductsCount--},

    incrementQuantity: (state,action)=>{
    
      const newQuantity = state.addedProducts[action.payload].quantity+1
      // set the numbers of products by increasing the count
      const Quantity =  state.addedProducts[action.payload].quantity = Math.max(1,newQuantity) 
      //the last section of code is to set the total price which is the number of product*price

      const price = state.addedProducts[action.payload].priceAsNumber
      
      const totalPrice =  state.addedProducts[action.payload].total=Quantity*price
      
    },

    decrementQuantity : (state,action)=>{

      const newQuantity = state.addedProducts[action.payload].quantity-1
      // set the numbers of products by increasing the count
      const Quantity =  state.addedProducts[action.payload].quantity = Math.max(1,newQuantity) 
      //the last section of code is to set the total price which is the number of product*price

      const price = state.addedProducts[action.payload].priceAsNumber
      
      const totalPrice =  state.addedProducts[action.payload].total=Quantity*price
    },

    addingProduct         : (state,action) => {

    state.addedProducts = [...state.addedProducts,action.payload]

    },

    removingProduct : (state,action)=>{

    state.addedProducts=state.addedProducts.filter(product=>product.productName!==action.payload)
    },

    upadateTotalBill : (state,action)=>{

      state.Total+=action.payload

    }

}



})

export default CardSlice.reducer 
export const {incrementProductNumber,
              decrementProductNumber,
              addingProduct,
              removingProduct,
              incrementQuantity,
            decrementQuantity,
            upadateTotalBill} = CardSlice.actions

