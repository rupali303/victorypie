import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MuiDrawer from './MuiDrawer';
import { useTheme } from '@emotion/react';
import { PAGES } from '../Database/Data';
function MuiNavBar() {
const [index, setindex] = useState(0)
const theme = useTheme()

const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
       <AppBar>
        <Toolbar sx={{backgroundColor:"lightcoral"}}>
          <ShoppingCartIcon sx={{color:"black"}}/>
        <Typography sx={{color:"black"}} variant='h6'>ShopMart</Typography>
        {isMobile ? <MuiDrawer/> :
        <>
         <Tabs value={index} onChange={(e,i)=>setindex(i)} indicatorColor='black'>

          {PAGES.map((page,i)=>{
            return <Tab key={i} label={page}/>
          })}
          {/* <Tab label="Products"/>
          <Tab label="Services"/>
          <Tab label="ContactUs"/>
          <Tab label="AboutUs"/> */}
         </Tabs>
         <Button sx={{marginLeft : "auto"}} variant='contained'>Login</Button>
         </>}
        </Toolbar>
        </AppBar> 
    </>
  )
}

export default MuiNavBar