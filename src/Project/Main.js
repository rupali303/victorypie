import React from 'react'
import { data } from "./Data"
import "./Style.css"

function Main() {
    console.log(data);
    return (

        <div className='productContainer'>
            {data.map((item, i) => {
                return(
                <div className='productWrapper'>
                    <img src={item.thumbnail} width={"200px"} height={"150px"} style={{marginTop:"5px",marginBottom:"50px"}}/>
                    <h5>{item.title}</h5>
                    <p>Price: ${item.price}</p>
                    <p>{item.rating}/5</p>
                    <h5>Brand: {item.brand}</h5>
                </div>
            )
            })}
        </div>
    )
}

export default Main