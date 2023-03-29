import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: false,
    value: '',
}

export const Active = createSlice({
    name: 'active',
    initialState,
    reducers: {
        dark: (state) => {
            state.theme = true
        },
        light: (state) => {
            state.theme = false
        },
        data: (state) =>{

        }
    },
})

export const { dark, light } = Active.actions

export default Active.reducer
