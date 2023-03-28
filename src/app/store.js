import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import  countryReducer  from '../country/countrySlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        country: countryReducer,
    },
})
