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

}



})

export default CardSlice.reducer 
export const {incrementProductNumber,decrementProductNumber} = CardSlice.actions

