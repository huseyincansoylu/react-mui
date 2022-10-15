import { InputAdornment, Stack, TextField } from '@mui/material'
import { useState } from 'react'


const MuiTextField = () => {
    const [state, setState] = useState({
        email: "",
        userName: "",
        password: ""
    })
    const [visible, setVisible] = useState(false)


    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as HTMLInputElement

        setState((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <Stack direction="column" spacing={2}>
            <TextField label="Email" variant="outlined" name='email' value={state.email} onChange={(e) => handleForm(e)} />
            <TextField label="UserName" variant="outlined" name='userName' value={state.userName} onChange={(e) => handleForm(e)} />
            <TextField label="Password" type="password" variant="outlined" name='password' value={state.password} onChange={(e) => handleForm(e)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                }}
            />
        </Stack>
    )
}

export default MuiTextField