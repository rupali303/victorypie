import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AxiosApi() {
    const[loading,setLoading]=useState(true)
    const [data, setData] = useState(null)
    console.log(data);
    const getData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response);
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData()

    },[])

if(loading){
    return <h1>Loading</h1>
}

    return (
        <>

        </>
    )
}

export default AxiosApi