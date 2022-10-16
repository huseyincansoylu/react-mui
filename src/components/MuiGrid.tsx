import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiGrid = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={8}>
                <Box bgcolor="blue" p={2}>1</Box>
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="green" p={2}>2</Box>
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="blue" p={2}>3</Box>
            </Grid>
            <Grid item xs={8}>
                <Box bgcolor="yellow" p={2}>4</Box>
            </Grid>
        </Grid>
    )
}

export default MuiGrid