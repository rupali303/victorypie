import React, { useState } from 'react'
// import "./Counter.css"
function Counter() {

const[data,setData] = useState(0)
const[data1,setData1] = useState(0)

const decrement=()=>{
setData((prev)=>prev - 1)
}
const increment = ()=>{
    setData((prev)=>prev + 1)
}


const decrement1=()=>{
    setData1((prev)=>prev - 1)
    }
    const increment1 = ()=>{
        setData1((prev)=>prev + 1)
    }
  return (
    <>
        <div className='container'>
       <div className='childContainer'>
       <button onClick={decrement}> - </button>
        <span>{data}</span>
       <button onClick={increment}> +</button>
       </div>
       
       <div className='childContainer'>
       <button onClick={decrement1}> - </button>
        <span>{data1}</span>
       <button onClick={increment1}> +</button>
       </div>
       <div>Total : {data + data1}</div>
       </div>
        
       

    </>
  )
}

export default Counter