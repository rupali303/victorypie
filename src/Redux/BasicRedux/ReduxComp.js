import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

function ReduxComp() {
const dispatch = useDispatch()
const selector = useSelector((state)=>state.username)

const update = (name)=>{
return{
  type:"CHANGE_NAME",
  payload:{
    username:name
  }
}
}

const handleClick=()=>{
dispatch((update("shree")))
}
  return (
    <>
    <button onClick={handleClick}>CHANGE NAME</button>
    </>
  )
}

export default ReduxComp