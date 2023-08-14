import React, { useState } from 'react'

function ChangeName() {
const [name,setName] = useState("Veer")
const handleChange = ()=>{
 setName("Shree")
}

  return (
    <div>
        <button onClick={handleChange}>Change</button>
        <h1>{name}</h1>
    </div>
  )
}

export default ChangeName