import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material"
import React, { useState } from "react"

const MuiRadio = () => {
    const [val, setVal] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value)
    }

    return (
        <FormControl>
            <FormLabel id="job-experience-group-label">
                Years of experience
            </FormLabel>
            <RadioGroup name="job-experience-group-label" value={val} onChange={handleChange}>
                <FormControlLabel
                    control={<Radio />}
                    label="0-2"
                    value="0-2"
                />
                <FormControlLabel
                    control={<Radio />}
                    label="3-5"
                    value="3-5"
                />
                <FormControlLabel
                    control={<Radio />}
                    label="6-10"
                    value="6-10"
                />
            </RadioGroup>
        </FormControl>
    )
}

export default MuiRadio