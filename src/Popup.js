import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close,  } from './Active'
import { newPopup } from './Active'
import LastPopup from './LastPopup'



function Popup() {
    const dispatch = useDispatch()
    const [write,setWrite] = useState('')

    const sonPopup = useSelector((state)=>state.inPopup.inActive)

    const handleChange = (e) => {
        setWrite(e.target.value)
    }

    return (
        <div className='popup' >
            Bu sayfa Popup Sayfasıdır
            <button onClick={() => dispatch(close())} >Close</button>
            <input placeholder='Bir mesaj yazınız' onChange={e => handleChange(e)} />
            {write}
            <button className='lastButton' onClick={()=> dispatch(newPopup()) } >son popup</button>
            {sonPopup && <LastPopup/>}
        </div>
    )
}

export default Popup
