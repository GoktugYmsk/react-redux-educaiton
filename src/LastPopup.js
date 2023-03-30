import React from 'react'
import { useDispatch } from 'react-redux'
import { newPopupClose } from './Active'


function LastPopup() {
    const dispatch= useDispatch()
  return (
    <div className='LastPopup' >
        Lastpopup
      <button className='lastInButton' onClick={()=>dispatch(newPopupClose())} >Kapat</button>
    </div>
  )
}

export default LastPopup
