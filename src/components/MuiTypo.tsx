import { Typography } from '@mui/material'


const MuiTypo = () => {
    return (
        <>
            <Typography variant="h1" >Hello1</Typography>
            <Typography variant="h2" >Hello2</Typography>
            <Typography variant="h3" >Hello3</Typography>
            <Typography variant="h4" component="h1">Hello4</Typography>
            <Typography variant="h5" >Hello5</Typography>
            <Typography variant="h6" >Hello6</Typography>

            <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>
            <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>

            <Typography variant="button" display="block" gutterBottom>
                button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                overline text
            </Typography>
        </>
    )
}

export default MuiTypo 