import { Button, IconButton } from '@mui/material'
import { Stack } from '@mui/system'
import DeleteIcon from '@mui/icons-material/Delete';


const MuiButton = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>

            <Button variant="contained" color="primary">Contained</Button>

            <Button variant="contained" disableRipple>
                Success
            </Button>

            <Button variant="outlined">Outlined</Button>

            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>

            <IconButton aria-label="delete" onClick={() => alert("hello")}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    )
}

export default MuiButton