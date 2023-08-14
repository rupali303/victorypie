import React, { useContext } from 'react'
import { userContext } from './SendContext1'

function ReceiveContext() {

  const user = useContext(userContext)
  return (
    <>
    <h1>ReceiveContext </h1>
    <p>{user}</p>
    </>
  )
}

export default ReceiveContext