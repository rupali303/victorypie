import React, { useEffect, useState } from 'react'

function FetchApi() {
const [input, setinput] = useState(null)
console.log(input);
    const getData =async ()=>{
        try {

            const responce =await fetch("https://jsonplaceholder.typicode.com/users")
            const data =await responce.json()
            setinput(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
   
useEffect(()=>{
    getData()
},[])

  return (
    <>
        
    </>
  )
}

export default FetchApi






//https://jsonplaceholder.typicode.com/users