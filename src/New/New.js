// import React, { useState } from 'react'
// import "./form.css"

// function MainBasicForm() {
   

//     const [form, setform] = useState({
//         username: "",
//         mobileNo: "",
//         password: ""
//     })
//     const [data, setdata] = useState([])

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setdata([...data, form])
//     }
//     const handleChange = (e) => {
//         setform((prev)=>({...prev,[e.target.name]:e.target.value}))

//     }

//     return (
//         <>
//             <div className='form-content'>
//                 <form onClick={handleSubmit}>
//                     <div>    <label>
//                         <input className="form-input" onChange={handleChange} type="text" placeholder='Username' value={form.username} name="username" />
//                     </label>
//                     </div>
//                     <br></br>
//                     <div>
//                         <label>
//                             <input className="form-input" onChange={handleChange} type="number" placeholder='MobileNo.' value={form.mobileNo} name="mobileNo" />
//                         </label>
//                     </div>

//                     <br></br>
//                     <div>
//                         <label>
//                             <input className="form-input" onChange={handleChange} type="password" placeholder='password' value={form.password} name="password" />
//                         </label>
//                     </div>

//                     <br></br>

//                     <button style={{ width: "80px", padding: "5px" }}>Submit</button>

//                 </form>
//                 <div>
//                     {data.map((d) => {
//                         return <ul>
//                             <li>{d.Username}</li>
//                             <li>{d.MobileNo}</li>
//                             <li>{d.password}</li>

//                         </ul>
//                     })}
//                 </div>

//             </div>
//         </>
//     )
// }

// export default MainBasicForm



import React, { useState } from 'react'
import "./form.css"

function MainBasicForm() {
    const [data, setdata] = useState([])

    const [form, setform] = useState({
        username: "",
        mobileNo: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setdata([...data, form])
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setform((prev) => ({ prev, [name]: value }))
    }

    return (
        <>
            <div className='form-content'>
                <form onClick={handleSubmit}>
                    <label>
                        <input className="form-input" onChange={handleChange} type="text" placeholder='Username' value={form.username} name="username" />
                    </label>
                    <br></br>
                    <label>
                        <input className="form-input" onChange={handleChange} type="number" placeholder='MobileNo.' value={form.mobileNo} name="mobileNo" />
                    </label>
                    <br></br>

                    <label>
                        <input className="form-input" onChange={handleChange} type="password" placeholder='password' value={form.password} name="password" />
                    </label>
                    <br></br>

                    <button style={{ width: "80px", padding: "5px" }}>Submit</button>
                    {data.map((d) => {
                        return <ul>
                            <li>{d.Username}</li>
                            <li>{d.MobileNo}</li>
                            <li>{d.password}</li>

                        </ul>
                    })}
                </form>
            </div>
        </>
    )
}

export default MainBasicForm