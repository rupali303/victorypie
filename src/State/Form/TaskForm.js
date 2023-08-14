import React, { useId, useState } from 'react'

function TaskForm() {
    const postTextAreaId = useId();
    const [formData, setFormData] = useState({
        text: "",
        email: "",
        password: "",
        checkbox: "",
        radio: "",
        date: "",
        address: "",
        dropdown: "",
        num: "",
        color: ""
    })

    const [data, setData] = useState([])

    const handleChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    }

    const [selected, setSelected] = useState("")
    const handleRadioChange = (e) => {
        setSelected(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formData])
    }

    const handleReset =()=>{
        setFormData({
            text: "",
            email: "",
            password: "",
            checkbox: "",
            radio: "",
            date: "",
            address: "",
            dropdown: "",
            num: "",
            color: ""
        })
    }
    return (
        <>
            <form>
                <label>
                    text :
                    <input type='text' name='text' value={formData.text} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email :
                    <input type='email' name='email' value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password :
                    <input type='password' name='password' value={formData.password} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Accept terms and conditions : 
                    <input type="checkbox" name="checkbox" />
                </label>
                <hr />

                <label>
                    <input
                        type='radio'
                        name='radio'
                        value="male"
                        onChange={handleRadioChange}
                        checked={selected === "male"}
                    />
                    Male
                </label>
                <label>
                    <input
                        type='radio'
                        name='radio'
                        value="female"
                        onChange={handleRadioChange}
                        checked={selected === "female"}

                    />
                    Female
                </label>





                   
                    {/* <label>
                    Gender:
                        <input type="radio" name="gender" value="female" />
                        female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="male" />
                        male
                    </label> */}
                    <br />
                    <label htmlFor='abc'> Color</label>
                    <input type='color' name='color' id='abc' />
                    <br />

                    <label htmlFor={postTextAreaId}>
                        Write your post:
                    </label>
                    <textarea id={postTextAreaId} name="postContent" rows={4} cols={40} />
                    <br />
                    <label>
                        Select city:
                        <select name="dropdown">
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="chennai">Chennai</option>
                        </select>
                    </label>

                <button type="reset" onClick={handleReset}>Reset form</button>
                <button type='submit' onSubmit={handleSubmit}>Submit</button>
          </form>
            <div>

                {data.map((item, i) => {
                    return <ul key={i}>
                        <li> {item.text} </li>
                        <li> {item.email} </li>
                        <li> {item.password} </li>
                        <li> {item.checkbox} </li>
                        <li> {item.radio} </li>
                        <li> {item.radio} </li>
                        

                        <li> {item.textarea} </li>
                    </ul>
                })}
            </div>
              
             
        </>
    )
}

export default TaskForm




































