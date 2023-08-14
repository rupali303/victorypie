import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';

function MuiForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
    })

    
    const handleChange = (e) => {
        setFormData((prev)=>({...prev, [e.target.name]: e.target.value}))

    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    

    const handleSignup = () => {
        alert(`Account created successfully. Login with your credentials`)
        localStorage.setItem('filledForm', JSON.stringify(formData));
        navigate("/login")
    }

    const handleNavToLogin= () => {
        navigate("/login")
    }
    
    
  return (
    <>
        <form onSubmit={handleSubmit}>
        <Box display={"flex"} maxWidth={"500px"} flexDirection={"column"} margin={"100px auto"}
                border={"0.25px solid #ccc"} padding={"40px 60px"} borderRadius={"15px"}
                boxShadow={"5px 5px 10px #ccc"} sx={{":hover":{boxShadow: "10px 10px 20px #ccc"}}}>
            <Typography color={"primary"} variant='h4' textAlign={"center"}>Sign Up</Typography>
            <TextField onChange={handleChange} margin='normal' name='username' placeholder='Enter Username' type='text' label="Username"></TextField>
            <TextField onChange={handleChange} margin='normal' name='email' placeholder='Enter Email' type='email' label="Email"></TextField>
            <TextField onChange={handleChange} margin='normal' name='password' placeholder='Enter Password' type='password' label="Password"></TextField>
            {/* <Button type='submit' sx={{mt:2}} variant='contained'>Login</Button> */}
            <Button sx={{mt:2}} onClick={handleSignup}>Sign Up</Button>
            <Button sx={{mt:2}} onClick={handleNavToLogin} variant='contained'>Already have an account, Login</Button>
        </Box>


        </form>
    </>
  )
}


export default MuiForm