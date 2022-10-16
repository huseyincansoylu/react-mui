import { Stack, Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'

const skills = ["html", "css", "js", "ts", "react"]

const MuiAutoComplete = () => {
    const [val, setVal] = useState<string | null>(null)

    console.log({ val });


    return (
        <Stack spacing={2} width="250px">
            <Autocomplete
                value={val}
                onChange={(e: any, newValue: string | null) => setVal(newValue)}
                options={skills} renderInput={(params) => <TextField {...params} label="Skils" />} />
        </Stack>
    )
}

export default MuiAutoComplete