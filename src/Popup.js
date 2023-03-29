import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { light } from './Active'


function Popup() {
    const dispatch = useDispatch()
    const [write, setWrite] = useState('')

    const handleChange = (e) => {
        setWrite(e.target.value)
    }

    return (
        <div className='popup' >
            Bu sayfa Popup Sayfasıdır
            <button onClick={() => dispatch(light())} >Close</button>
            <input placeholder='Bir mesaj yazınız' onChange={e => handleChange(e)} ></input>
            {write}
        </div>
    )
}

export default Popup
