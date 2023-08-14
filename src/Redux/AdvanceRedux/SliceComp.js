import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { increment } from './SliceReducer'

function SliceComp() {

    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)

  return (
    <>
        
<h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>

    </>
  )
}

export default SliceComp