import { Paper, Typography, Box } from "@mui/material";
import successIcon from '../images/successIcon.svg';
import icon2 from '../images/padlock.svg';

import Button from "@mui/material/Button";

import React from "react";


import { Link as RouterLink } from 'react-router-dom';


export default function TellStatus(props) {
  
    if (props.status === "accountCreated")
        return (
            <Paper component="div"
                sx={{ display: 'flex', flexDirection: 'column',
                pb: 15, pt: 8, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
                borderRadius:4 }}>
                <Box component='img'
                    width={120}
                    mx='auto'
                    src={successIcon} />
                <Typography variant="h5" fontWeight={700} textAlign='center'>Your account has been created successfully</Typography>
                <Typography variant="h5" fontWeight={700} textAlign='center'>Your username is {sessionStorage.getItem('login')}</Typography>

                {/* <Typography variant="body2" mt={3} textAlign='center'>Your free Accord Number is</Typography> */}
                {/* <Typography variant="h5" mt={1} fontWeight={700} textAlign='center'>0700 756 5898</Typography> */}

            
                <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', width: '10px !important' }}>
                    <Button  color='success' variant="contained"
                    sx={{  mt: 5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Okay, Thank You!
                    </Button>
                </RouterLink>
            </Paper>
        )
    else if (props.status === "passwordChanged")
        return (
            <Paper component="div"
                sx={{ display: 'flex', flexDirection: 'column',
                pb: 15, pt: 8, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
                borderRadius:4 }}>
                <Box component='img'
                    width={120}
                    mx='auto'
                    src={icon2} />
                <Typography variant="h5" fontWeight={700} textAlign='center'>
                    Your password has been changed successfully
                </Typography>
            
                <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', width: '10px !important' }}>
                    <Button  color='success' variant="contained"
                    sx={{  mt: 5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Okay, Thank You!
                    </Button>
                </RouterLink>
            </Paper>
        )
}