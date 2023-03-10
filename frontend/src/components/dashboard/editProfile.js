import { Box, Paper, Stack, Typography, TextField, MenuItem } from "@mui/material"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"

import successIcon from '../../images/successIcon.svg';

import { Link as RouterLink } from "react-router-dom"
import { useState } from "react";

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';


const countries = [
    {
        value: '+234',
        label: 'Nigeria',
    },
    {
        value: '+233',
        label: 'Ghana',
    },
    {
        value: '+255',
        label: 'Tanzania',
    },
]


export default function EditProfile() {
    const [country, setCountry] = useState('+234');

    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '800px'},
               borderRadius:4 }}>

            <Box display='flex' px={3} alignItems='center'>
                <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                    <KeyboardBackspace sx={{ position: 'absolute' }}/>
                </RouterLink>
                <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Edit Profile</Typography>
            </Box>
            <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

            <Box px={3}>
                <Stack direction='column' pt={6} sx={{ px: {xs: 5, sm: 19} }}>
                    
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" label="User Name (Phone Number)" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" label="Last name" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" type='email' label="Email Address" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" label="Address" variant="outlined" />
                    </FormControl>
                    
                    <TextField
                        id="outlined-select-country"
                        select
                        label="Country"
                        defaultValue="+234"
                        sx={{ mt: 3}}
                        onChange={(e) => setCountry(e.target.value)}
                        >
                            {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}</TextField>

                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" label="State" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" label="City" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" label="Postal Code" variant="outlined" />
                    </FormControl>
                    
                    <RouterLink to='/Dashboard' state={{page: 'confirmAddFunds' }} style={{ textDecoration: 'none' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Make Payment
                        </Button>
                    </RouterLink>
                
                    
                </Stack>
            </Box>
        </Paper>
    )
}