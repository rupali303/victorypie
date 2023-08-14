import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function FormPracticeMui() {

    const [isSignup, setIsSignup] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [data, setData] = useState([])

    const handleChange = (e) => {
        console.log(e);
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setData([data, formData])
        console.log(formData);
    }

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box border={"1px solid #ccc"}
                    boxShadow={"2px 2px 5px gray"}
                    padding={"50px"}
                    display={"flex"}
                    flexDirection={"column"}
                    margin={"100px auto"}
                    maxWidth={"400px"}
                    borderRadius={"10px"}
                    sx={{
                        "&:hover": {
                            boxShadow: "5px 5px 10px gray"
                        }
                    }}
                >
                    <Typography textAlign={"center"} color={"primary"} variant='h4'>{isSignup ? "Sign Up" : "Login"}</Typography>

                    {isSignup && <TextField name='name' label="username" value={formData.name} onChange={handleChange} margin='normal' type='text' placeholder='Enter Name' />}
                    <TextField name='email' label="email" value={formData.email} onChange={handleChange} margin='normal' type='email' placeholder='Enter Email' />
                    <TextField name='password' label="password" value={formData.password} onChange={handleChange} margin='normal' type='password' placeholder='Enter Password' />
                    <Button type='submit' variant='contained' sx={{ mt: 2 }}>{isSignup ? "Sign Up" : "Login"}</Button>
                    <Button onClick={handleSwitch} sx={{ mt: 2 }}>{isSignup ? "Login" : "Sign Up"}</Button>
                </Box>
            </form>
        </>
    )
}

export default FormPracticeMui