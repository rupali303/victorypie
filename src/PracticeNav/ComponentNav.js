import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React from 'react'
import StoreIcon from '@mui/icons-material/Store';
import { useNavigate } from 'react-router-dom';

function ComponentNav() {
    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate("/Login")
    }
  return (
    <>
       <AppBar sx={{backgroundColor:"lightskyblue"}}>
        <Toolbar>
            <StoreIcon sx={{color:"black"}}/>
            <Typography sx={{color:"black"}} variant='h5'>FreshMart</Typography>
            <Tabs>
                <Tab label="Products"/>
                <Tab label="Services"/>
                <Tab label="About us"/>
                <Tab label="Contact us"/>
            </Tabs>
         <Button onClick={handleLogin} sx={{marginLeft:"auto"}} variant='contained'>Login</Button>
        </Toolbar>
        </AppBar> 
    </>
  )
}

export default ComponentNav