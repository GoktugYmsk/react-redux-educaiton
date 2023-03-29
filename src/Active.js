import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
    theme: false,
}

export const Active = createSlice({
    name: 'active',
    initialState,
    reducers:{
        dark: (state)=>{
            state.theme = false
            alert('Çalıştı')
        },
        light: (state)=>{
            state.theme = true
        },
    },
})

export const {dark, light} =  Active.actions

export default Active.reducer
