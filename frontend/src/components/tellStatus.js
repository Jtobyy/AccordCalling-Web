import { Paper, Typography, Box, Stack, FormControl } from "@mui/material";
import successIcon from '../images/successIcon.svg';
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import React from "react";


import { Link as RouterLink } from 'react-router-dom';


export default function TellStatus() {
    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               py: 10, px: 4, mt: 3, width: {xs: '70vw', sm: '40vw'},
               borderRadius:4 }}>
            <Box component='img'
                 width={120}
                 mx='auto'
                 src={successIcon} />
            <Typography variant="h5" fontWeight={700} textAlign='center'>Your account has been created successfully</Typography>
            <Typography variant="body2" mt={3} textAlign='center'>Your free Accord Number is</Typography>
            <Typography variant="h5" mt={1} fontWeight={700} textAlign='center'>0700 756 5898</Typography>

        
            <RouterLink to='/Auth' state={{page: 'otp' }} style={{ textDecoration: 'none', width: '10px !important' }}>
                <Button  color='success' variant="contained"
                sx={{  mt: 5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                    Okay, Thank You!
                </Button>
            </RouterLink>
        </Paper>
    )
}