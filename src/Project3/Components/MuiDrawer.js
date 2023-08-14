import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { PAGES } from '../Database/Data';
function MuiDrawer() {

const [open, setOpen] = useState(false)

    return (
        <>
            <Drawer open={open} onClose={()=>setOpen(false)}>
                <List>

                {PAGES.map((page,i)=>{
                    return <>
                    <ListItemButton key={i}>
                        <ListItemIcon>
                            <ListItemText>{page}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    
                    
                    </>
                })}                    
                    {/* <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Products</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Services</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>AboutUs</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>ContactUs</ListItemText>

                        </ListItemIcon>
                    </ListItemButton> */}
                </List>
            </Drawer>
            <IconButton sx={{marginLeft:"auto"}} onClick={()=>setOpen(!open)}>
                <MenuIcon/>
            </IconButton>
        </>
    )
}

export default MuiDrawer