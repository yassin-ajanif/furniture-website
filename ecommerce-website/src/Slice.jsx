import {createSlice} from '@reduxjs/toolkit'

const initialState = { 

    ProductsCount:10,
    addedProducts:[]
}

const CardSlice = createSlice({

name:'card',
initialState,
reducers: {

    incrementProductNumber: (state)=>{state.count++},
    decrementProductNumber: (state)=>{state.count--},
    addingProduct         : (state,action) => {

    state.addedProducts = [...state.addedProducts,action.payload]

    }

}



})

export default CardSlice.reducer 
export const {incrementProductNumber,decrementProductNumber,addingProduct} = CardSlice.actions

