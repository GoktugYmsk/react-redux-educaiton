import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { light } from './Active'
import { dark } from './Active'

function Deneme() {

    const ekrandaGoster = useSelector((tema)=>tema.deneme.setActive)

    const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>dispatch(dark())} >Dark</button>
      <button onClick={()=>dispatch(light())} >Light</button>
    </div>
  )
}

export default Deneme
