import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter/counterSlice'

export function Counter() {
  const data = useSelector((state) => state.counter.value)


  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())} >
          arttır
        </button>
        <span>{data}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())} >
          azalt
        </button>
      </div>
    </div >
  )
}