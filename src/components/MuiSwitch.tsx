import React, { useState } from 'react'
import { FormControlLabel, Switch } from '@mui/material'

const MuiSwitch = () => {

    const [on, setOn] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOn(e.target.checked)
    }

    console.log({ on });

    return (
        <FormControlLabel label="dark mode" control={<Switch value={on} onChange={handleChange} />} />
    )
}

export default MuiSwitch