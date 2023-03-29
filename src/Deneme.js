import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { light } from './Active'
import { dark } from './Active'
import Popup from './Popup'

function Deneme() {

    const ekrandaGoster = useSelector((tema)=>tema.deneme.theme)
    console.log(ekrandaGoster)

    const dispatch = useDispatch()

  return (
    <div>
        {ekrandaGoster && <Popup/>}
      <button onClick={()=>dispatch(dark())} >Dark</button>
      <button onClick={()=>dispatch(light())} >Light</button>
    </div>
  )
}

export default Deneme
