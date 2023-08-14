import React from 'react'
import { Outlet } from 'react-router-dom'
import MuiNavbar from '../../components/MuiNavbar'

function RootLayout() {
  return (
    <>
    
      <Outlet/>
      {/* <MuiNavbar/>  */}
    </>
  )
}

export default RootLayout