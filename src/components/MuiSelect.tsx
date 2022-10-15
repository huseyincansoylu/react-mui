import { Box, MenuItem, TextField } from "@mui/material"
import React, { useState } from "react"

const MuiSelect = () => {

    const [country, setCountry] = useState<string[]>([])

    console.log({ country });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        console.log(value, "val", typeof value)

        setCountry(typeof value === "string" ? value.split(",") : value)
    }

    return (
        <Box width="250px">
            <TextField label="Select a country" select value={country} onChange={handleChange} fullWidth
                SelectProps={{
                    multiple: true
                }}
            >
                <MenuItem value="tr">tr</MenuItem>
                <MenuItem value="eng">eng</MenuItem>
                <MenuItem value="usa">usa</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect