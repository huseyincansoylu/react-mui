import { Avatar, Stack } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: "blue" }}>N</Avatar>
            <Avatar sx={{ bgcolor: "green" }}>OP</Avatar>
        </Stack>
    )
}

export default MuiAvatar 