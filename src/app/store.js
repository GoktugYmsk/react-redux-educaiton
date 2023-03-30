import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import  countryReducer  from '../country/countrySlice'
import Active from '../Active'
import Popup from '../Popup'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        country: countryReducer,
        getir: Active,
        inPopup: Active,
        textTry: Active,
    },
})
