import React, { useState } from 'react'

function UpdateArray() {

const [list,setList] = useState([1])
const handleChange = () =>{
setList([...list,list.length+1])
}

  return (
    <div>
        <button onClick={handleChange}>Update</button>
        <h1>{String(list)}</h1>
        <ul>
            {list.map((n,i)=>{
                
                <li key={i}>{n}</li> 
            })}
           
        </ul>
    </div>
  )
}

export default UpdateArray