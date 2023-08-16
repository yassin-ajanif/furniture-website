import {configureStore} from '@reduxjs/toolkit'
import CardSlice from './Slice'

const store = configureStore({

    reducer : { yourCard : CardSlice }
})

export default store