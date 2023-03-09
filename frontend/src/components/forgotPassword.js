import { Paper, Typography, Box, Stack, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import React from "react";


import { Link as RouterLink } from 'react-router-dom';


export default function ForgotPassword() {
    
    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               pt: 5, pb: 15, px: 4, mt: 3, width: {xs: '70vw', sm: '40vw'},
               borderRadius:4 }}>
        
            <Typography variant="h5" fontWeight={700} mt={3.5}>Reset Password</Typography>
            <Typography variant="body2" mt={1} color="#2E368F">
                Enter your email address to request password reset
            </Typography>

            <FormControl sx={{ pt: 8}}>
                <TextField type='email' id="outlined-basic" label="Email Address" variant="outlined" />
            </FormControl>

            
            <RouterLink to='/Auth' state={{page: 'resetPassword' }} 
                        style={{ textDecoration: 'none', width: '10px !important', marginTop: '50px' }}>
                <Button  color='success' variant="contained"
                sx={{  mt: 2.5, py: 1.5, color: 'white', 
                backgroundColor: '#8DC641', 
                textTransform: 'none', width: '100%' }}>
                    Continue
                </Button>
            </RouterLink>
        </Paper>
    )
}