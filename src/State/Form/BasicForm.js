import React, { useState } from 'react'

function BasicForm() {

    const [formData,setFormData] = useState({
        username : "",
        email : "",
        password : ""
    })

    const [data,setData] = useState([])

    const handleChange = (e) =>{
        console.log(e.target.value);
        console.log(e.target.name);
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setData([...data,formData])
    }
  return (
    <div className='container w-3 m-3 border border-2 mx-auto w-5 p-2'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3 w-50 mx-auto'>
        <label className='label-control'>
            Username : 
            <input className='form-control' type='text' name='username' value={formData.username} onChange={handleChange}/>
        </label>
        </div>
        <br/>
        <div className='mb-3 w-50 mx-auto'>

        <label className='label-control'>
            Email : 
            <input className='form-control' type='email' name='email' value={formData.email} onChange={handleChange}/>
        </label>
        </div>
        <br/>
        <div className='mb-3 w-50 mx-auto'>

        <label className='label-control'>
            Password : 
            <input className='form-control' type='password' name='password' value={formData.password}  onChange={handleChange}/>
        </label>
        </div>
        <br/>
        <div className="d-flex justify-content-center">
                    <button className='btn btn-primary w-10' type='submit'>Submit</button>
                </div>
        </form>  
        {/* {JSON.stringify(formData)} */}
        <div>
            {/* {Object.keys(formData).map((item,i)=>{
                return <ul key={i}>
                    <li>{formData[item]}</li>
                    
                    </ul>  */}
            {/* })} */}
            {data.map((item,i)=>{
                return <ul key={i}>
                    <li> {item.username} </li>
                    <li> {item.email} </li>
                    <li> {item.password} </li>
                </ul>
            })}
        </div>
    </div>
  )
}

export default BasicForm




































// import React, { useState } from 'react'

// function BasicForm() {

//     const[formData,setFormData] = useState({
//         username : "",
//         email : "",
//         password :""
//     })

//     const [data,setData] = useState([])

//     const handleChange = (e) =>{
//         // console.log(e.target.value);
//         setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))

//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         setData([...data,formData])
//     }
//   return (
//     <div>
//         <form onClick={handleSubmit}>
//             <label>
//                 UserName :
//                 <input type='text'name='username' value={formData.username} onClick={handleChange}/>
//             </label>
//             <br/>
//             <label>
//                 Email :
//                 <input type='email' name='email' value={formData.email} onClick={handleChange}/>
//             </label>
//             <br/>
//             <label>
//                 Password :
//                 <input type='password' name='password' value={formData.password} onClick={handleChange}/>
//             </label>
//             <button>Submit</button>
//         </form>
//         <div>
//             {data.map((item,i)=>{
//                 return <ul key={i}>
//                     <li>{item.username} </li>
//                     <li>{item.email} </li>
//                     <li>{item.password} </li>
//                 </ul>
//             })}
//         </div>
//     </div>
//   )
// }

// export default BasicForm