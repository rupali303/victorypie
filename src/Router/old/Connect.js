import React from 'react'
import { Outlet } from 'react-router-dom'

function Connect() {
  return (
    <div>
        <h1>Connect</h1>
        {Outlet}
        </div>
  )
}

export default Connect