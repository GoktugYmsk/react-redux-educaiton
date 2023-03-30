import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
    active: false,
    inActive: false,
    deneme: '',
}


export const Active = createSlice({
    name: 'active',
    initialState,
    reducers: {
        close: (state) => {
            state.active = false
        },
        open: (state) => {
            state.active = true
        },
        newPopup: (state) => {
            state.inActive = true
        },
        newPopupClose: (state) => {
            state.inActive = false
        },
        inputDeneme: (state) => {
            state.deneme = ''
        }
    },
})

export const { close, open, newPopup, newPopupClose, inputDeneme } = Active.actions

export default Active.reducer
