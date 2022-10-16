import React from 'react'
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper } from '@mui/material'

const MuiTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MuiTable



const data = [{
    "id": 1,
    "first_name": "Ly",
    "last_name": "De Moreno",
    "email": "ldemoreno0@fema.gov",
    "gender": "Male",
    "ip_address": "104.177.88.218"
}, {
    "id": 2,
    "first_name": "Dino",
    "last_name": "Davies",
    "email": "ddavies1@google.ca",
    "gender": "Male",
    "ip_address": "16.19.93.232"
}, {
    "id": 3,
    "first_name": "Harp",
    "last_name": "Tomei",
    "email": "htomei2@mail.ru",
    "gender": "Bigender",
    "ip_address": "145.144.171.246"
}, {
    "id": 4,
    "first_name": "Rock",
    "last_name": "Loadsman",
    "email": "rloadsman3@dedecms.com",
    "gender": "Male",
    "ip_address": "125.16.183.181"
}, {
    "id": 5,
    "first_name": "Dylan",
    "last_name": "Demeter",
    "email": "ddemeter4@deliciousdays.com",
    "gender": "Male",
    "ip_address": "172.78.11.152"
}]