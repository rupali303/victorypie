import React, { useState } from 'react'
import "./Task1.css"
import {data} from "./data"

function Main() {

 

  return (
    <>
        <div className='container'>
            <header className='header'>
                <div className='row'>
                    <div className='col-7'>
                        <nav>
                        <ul className='navbar'>
                            <li><a href='.#'>Index</a></li>
                            <li><a href='.#'>Smartphones</a></li>
                            <li><a href='.#'>About</a></li>
                        </ul>
                        </nav>
                    </div>
                    <div className='col-5'>
                        <nav className='navbuttons'>
                        <button className='btn' ><a href='.#' >Sign In</a></button>
                        <button className='btn'><a href='.#'>Sign Up</a></button>
                        </nav>
                    </div>
                </div>
                </header>

                <div className='secondHeading'>
                    <h2>Top 5 Favourite Mobiles</h2>
                    {data.map((product)=>{
                        return <>
                        <h3><a href='.#'>{product.title}</a></h3>
                        </>
                    })}
                </div>
                <div className='mainContent'>
                    {data.map((product)=>{
                        return <div className='card'>
                            <img src={product.thumbnail}></img>
                            <h2>Product: {product.title}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Rating: {product.rating}/5</p>
                        </div>
                    })}
                    
                </div>
        </div>
    </>
  )
}

export default Main