import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function TaskForm1() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        checkbox: "",
        radio: "",
        date: "",
        textarea: "",
        dropdown: "",
        pincode: "",
        color: ""
    })

    const [data, setdata] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.value);
        setdata([...data,formData])
    }

    const handleChange = (e) => {
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const [selected, setSelected] = useState("")
    const handleRadioChange = (e) => {
        setSelected(e.target.value)
    }
    console.log("radio", selected);

    const handleReset = () => {
setFormData({
    username: "",
    email: "",
    password: "",
    checkbox: "",
    radio: "",
    date: "",
    textarea: "",
    dropdown: "",
    pincode: "",
    color: ""
})
    }

    return (
        <div className='container border border-2 mx-auto w-10 p-5'>
            <form onSubmit={handleSubmit} >
                <div className='mb-1 w-50 mx-auto' >
                    <label className='label-control'>
                        Username
                        <input className='form-control' name='username' type='text' value={formData.username} onChange={handleChange} />
                    </label>
                </div>
                <br />
                <div className='mb-1 w-50 mx-auto'>
                    <label className='label-control'>
                        email
                        <input className='form-control' name='email' type='email' value={formData.email} onChange={handleChange} />
                    </label>
                </div>
                <br />
                <div className='mb-1 w-50 mx-auto'>
                    <label className='label-control'>
                        password
                        <input className='form-control' name='password' type='password' value={formData.password} onChange={handleChange} />
                    </label >
                </div>
                <br />
                <div className='mb-3 w-50 mx-auto'>
                    <label className='mr-2'>
                        checkbox
                        <input className='m-2' name='checkbox' value={formData.checkbox} type='checkbox' onChange={handleChange} />
                    </label>
                </div>
                <br />
                <div className='mb-3 w-50 mx-auto'>
                    <label>
                        male
                        <input className='m-1' name='radio' type='radio' value={formData.radio} onChange={handleChange} />
                    </label>
                    <label >
                        female
                        <input className='m-1' name='radio' type='radio' value={formData.radio} onChange={handleChange}/>
                    </label>
                </div>
                <br />
                <div className='mb-3 w-50 mx-auto'>
                    <label className='label-control'>BirthDate:
                        <input className='form-control' type='date' value={formData.date} name='date' onChange={handleChange} />
                    </label>
                </div>
                <br />
                <div className='mb-3 w-50 mx-auto'>
                    <label className='label-control'>
                        Write your address here :
                        {/* <textarea name='address' onChange={handleChange} type='text' rows={4} cols={20}  value={formData.textarea}></textarea> */}
                        <input className='form-control' type='text' placeholder='write here' name='textarea' value={formData.textarea} onChange={handleChange}/>
                    </label>
                </div>
                <br />
                <div className='mb-3 w-50 mx-auto'>
                    <label className='label-control'>
                        Select city:
                        <select name="dropdown" value={formData.dropdown} onChange={handleChange}>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="chennai">Chennai</option>
                        </select>
                    </label>
                </div>
                <br/>
                <div className='mb-3 w-50 mx-auto'>
                    <label className='label-control'>
                        pincode:
                        <input className='form-control' type='number' name='pincode' value={formData.pincode} onChange={handleChange}/>
                    </label>
                </div>
                <br />
                <div className='mb-3 w-50 mx-auto'>
                    <label htmlFor='abc' > Color</label>
                    <input  type='color' name='color' id='abc' value={formData.color} onChange={handleChange}/>
                    </div>
                    <div className='p-2 color-white' >
                    <button  >Submit</button>
                <button onClick={handleReset}>Reset</button>
                    </div>
                
            </form>
            <div>
            {data.map((item, i) => {
                    return <ul key={i}>
                        <li> {item.username} </li>
                        <li> {item.email} </li>
                        <li> {item.password} </li>
                        <li> {item.checkbox} </li>
                        <li> {item.radio} </li>
                        <li> {item.date} </li>
                        <li> {item.textarea} </li>
                        <li> {item.dropdown} </li>
                        <li> {item.pincode} </li>
                    </ul>
                })}
            </div>
        </div>
    )
}

export default TaskForm1