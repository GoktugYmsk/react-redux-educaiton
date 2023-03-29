import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import  countryReducer  from '../country/countrySlice'
import Active from '../Active'
import Popup from '../Popup'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        country: countryReducer,
        open: Active,
        close: Active,
    },
})
