import React, { createContext } from 'react'
import ReceiveContext from './ReceiveContext'
export const userContext = createContext()
function SendContext1() {

    const name = "Veer"
  return (
    <>
    <userContext.Provider value={name}>
        <ReceiveContext/>
        </userContext.Provider>
    </>
  )
}

export default SendContext1