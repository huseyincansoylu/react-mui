import React from 'react'
import { AppBar, Toolbar, IconButton } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'

const MuiNavbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit">
                    <CatchingPokemon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar