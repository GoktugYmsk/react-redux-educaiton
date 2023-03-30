import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { open } from './Active'
import Popup from './Popup'

function Deneme() {

    const ekrandaGoster = useSelector((tema)=>tema.getir.active)

    const dispatch = useDispatch()

  return (
    <div>
        {ekrandaGoster && <Popup/>}
      <button onClick={()=>dispatch(open())} >Open</button>
    </div>
  )
}

export default Deneme
