import React, { useState } from 'react'
import { Drawer, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from "@mui/icons-material/Menu"

const MuiDrawer = () => {
    const [show, setShow] = useState(false)

    return (
        <>  <Drawer anchor='left' open={show} onClose={() => setShow(false)}  >
            <Box sx={{ width: "500px" }}>
                wow
            </Box>
        </Drawer>
            <IconButton size='large' edge="start" onClick={() => setShow(true)}>
                <MenuIcon />
            </IconButton>
        </>

    )
}

export default MuiDrawer