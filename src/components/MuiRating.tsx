import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'

const MuiRating = () => {
    const [val, setVal] = useState<number | null>(null)

    const handleChange = (
        e: React.ChangeEvent<{}>,
        newValue: number | null
    ) => {
        setVal(newValue)
    }

    console.log({ val })


    return (
        <Stack spacing={2}>
            <Rating value={val} onChange={handleChange} precision={0.5} />
        </Stack>
    )
}

export default MuiRating