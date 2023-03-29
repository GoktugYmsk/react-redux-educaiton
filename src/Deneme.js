import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dark } from './Active'
import Popup from './Popup'

function Deneme() {

    const ekrandaGoster = useSelector((tema)=>tema.open.theme)
    console.log(ekrandaGoster)

    const dispatch = useDispatch()

  return (
    <div>
        {ekrandaGoster && <Popup/>}
      <button onClick={()=>dispatch(dark())} >Open</button>
    </div>
  )
}

export default Deneme
