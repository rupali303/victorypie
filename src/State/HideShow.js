import React, { useState } from 'react'

function HideShow() {

    const [toggle,setToggle] = useState(true)
    const abc = {
        height : "25vh",
        width : "25vw",
        backgroundColor : "red"
    }
    const handleChange=()=>{
        setToggle(!toggle)
    }
  return (
    <div>
<button onClick={handleChange}>{toggle ? "Hide" : "Show"}</button>
{toggle ? <div style={abc}></div> : null}
    </div>
  )
}

export default HideShow