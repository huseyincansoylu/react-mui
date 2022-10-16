import { Box } from '@mui/material'
import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material"
import { MailLockSharp } from '@mui/icons-material'


const MuiList = () => {
    return (
        <Box sx={{
            width: "400px",
            bgcolor: "#efefef"
        }}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <MailLockSharp />
                    </ListItemIcon>
                    <ListItemText primary="List item 1" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MailLockSharp />
                    </ListItemIcon>
                    <ListItemText primary="List item 2" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MailLockSharp />
                    </ListItemIcon>
                    <ListItemText primary="List item 3" />
                </ListItem>
            </List>

        </Box>
    )
}

export default MuiList