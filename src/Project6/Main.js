import React from 'react'
import MuiNavbar from './components/MuiNavbar'
import MuiForm from './components/MuiLoginForm'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'
// import { router } from './routes/Router'

function Mainproject2Copy() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default Mainproject2Copy