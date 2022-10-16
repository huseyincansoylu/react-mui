import { Divider } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const MuiStack = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} divider={<Divider orientation="vertical" flexItem />}>
            <Box width="400px" height="300px" bgcolor="black">1</Box>
            <Box width="400px" height="300px" bgcolor="pink">2</Box>
            <Box width="400px" height="300px" bgcolor="green">3</Box>
        </Stack>
    )
}

export default MuiStack