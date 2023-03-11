import { Paper, Typography, Box, Stack, FormControlLabel, Radio } from "@mui/material";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Link as RouterLink, Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import { countries } from "../countries";
import axios from 'axios';


export default function Signup() {
    const [country, setCountry] = useState('+1');
    const [countryLabel, setCountryLabel] = useState('US');
    const [number, setNumber] = useState('');

    const [verify, setVerify] = useState(false);

    const handleSubmit = () => {
        sessionStorage.setItem('country', country)
        sessionStorage.setItem('countryLabel', countryLabel)
        sessionStorage.setItem('number', number)

        setVerify(true)        
    }

    useEffect(() => {
        setVerify(false)
    });

    if (verify && sessionStorage.getItem('number') != "") 
        return <Navigate to="/Auth" state={{page: 'otp' }} />
    else
    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               py: 10, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
               borderRadius:4 }}>
            <Stack direction='row' spacing={1}>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#EEEEEE" width='52px' height='2px'></Box>
                <Box bgcolor="#EEEEEE" width='52px' height='2px'></Box>
                <Box bgcolor="#EEEEEE" width='52px' height='2px'></Box>
            </Stack>

            <Typography variant="h5" fontWeight={700} mt={3.5}>Create your account</Typography>

            <Stack direction='column' pt={6}>
                <TextField
                    id="outlined-select-country"
                    select
                    label="Country"
                    defaultValue="+1"
                    helperText="Please select your country"
                    onChange={(e) => {
                        setCountry(e.target.value)
                        setCountryLabel(e.target.dataset.label)
                    }}
                    >
                         {countries.map((option) => (
                        <MenuItem key={option.value} data-label={option.label} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}</TextField>
                    <Stack display='flex' direction='row' mt={3}>
                        <TextField id="outlined-basic" 
                                   variant="outlined" 
                                   value={country}
                                   sx={{ width: '70px'}}
                                   disabled/>
                        <TextField label="Phone number" 
                                    type="phone"
                                   variant="outlined" 
                                   sx={{ ml: 2, flexGrow: 1 }}
                                   onKeyUp={(e) => {setNumber(country + e.target.value)}}/>
                    </Stack>
                    
                    <Typography variant="body2" mt={3} color="#2E368F">
                        We will be sending a 4 digit verification code to the number provided
                    </Typography>
                    
                    <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Proceed
                    </Button>
                
                    <Typography variant="body2" mt={4}>
                        Already have an account?
                        <RouterLink to='/Signin'> <Link color="#2E368F" variant="span">Sign in</Link></RouterLink>
                    </Typography>
                    {/* <Link color="#2E368F" mt={3} textAlign="right" >Sign in</Link>
                    <Button  color='success' href="#plans" variant="contained"
                    
                    sx={{  my: 3, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none' }}>
                        Log in
                    </Button>
            
                     */}
                    
                </Stack>
        </Paper>
    )
}