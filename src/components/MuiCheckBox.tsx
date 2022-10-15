import { FormControlLabel, Checkbox } from "@mui/material"
import React, { useState } from "react"
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const MuiCheckBox = () => {

    const [accept, setAccept] = useState(false)

    console.log({ accept });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(e.target.checked)
    }

    return (
        <div>
            <FormControlLabel label="accept terms" control={<Checkbox checked={accept} onChange={handleChange} />} />
            <Checkbox checked={accept} onChange={handleChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </div>
    )
}

export default MuiCheckBox