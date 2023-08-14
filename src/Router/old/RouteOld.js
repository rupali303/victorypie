import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Connect from './Connect'
import New from './New'

function RouteOld() {
    return (
        <>
            <BrowserRouter>
                <Link to={"/"}>
                    Home
                </Link>
                <Link to={"/About"}>
                    About
                </Link>
                <Link to={"/Contact"}>
                    Contact
                </Link>
                <Link to={"/Connect"}>
                    Connect
                </Link>
                <Link to={"/Connect/New"}>
                    New
                </Link>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Connect" element={<Connect/>}>
                        <Route path="New" element={<New/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteOld