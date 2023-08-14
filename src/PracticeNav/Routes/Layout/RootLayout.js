import React from 'react'
import { Outlet } from 'react-router-dom'
import ComponentNav from '../../ComponentNav'

function RootLayout() {
  return (
    <>
    <ComponentNav/>
    <Outlet/>
    </>
  )
}

export default RootLayout