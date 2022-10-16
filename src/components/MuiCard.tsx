import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material'
import React from 'react'

const MuiCard = () => {
    return (
        <Box width="300px">
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h5' component="div">
                        Title 1
                    </Typography>
                </CardContent>
                <CardMedia component="img" height="120px" image="https://source.unsplash.com/random" />
                <CardContent>
                    <Typography gutterBottom variant='body2' color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non modi cumque quibusdam quae blanditiis, aliquam maiores repudiandae,
                        odit distinctio recusandae dolor dignissimos quasi earum totam cupiditate quis voluptatibus unde asperiores.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default MuiCard