import React from 'react'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home'
import ContactUs from './Components/ContactUs'
import ProductUs from './Components/ProductUs'
import Error from './Components/Error'

function RoutingNew() {

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element = {<Home/>}>
            <Route path='ContactUs' element={<ContactUs/>}/>
            <Route path='ProductUs' element={<ProductUs/>}/>
            <Route path='*' element={<Error/>}/>

        </Route>
    )
)

  return (
    <>
     <RouterProvider router={router} />  
       
    </>
  )
}

export default RoutingNew