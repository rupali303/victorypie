import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const nav = [
        {path: "/", title: "Home"},
        {path: "/ContactUs", title: "ContactUs"},
        {path: "/ProductUs", title: "ProductUs"},
    ]
  return (
    <>
    {nav.map((d)=>{
        return  <Link to = {d.path}>{d.title}</Link>
    })}
    </>
  )
}

export default Navbar