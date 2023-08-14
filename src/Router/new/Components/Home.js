import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Home