import { Paper, Typography, Box, Stack, FormControl, Radio, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import React from "react";

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from "react";

import changePasswordIcon from '../../images/changePasswordIcon.svg';

export default function ChangePassword() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
               borderRadius: 4 }}>

            <Box display='flex' px={3} pb={2} alignItems='center'>
                <RouterLink to='/Dashboard' state={{page: 'myaccount' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                    <KeyboardBackspace sx={{ position: 'absolute' }}/>
                </RouterLink>
                <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Change Password</Typography>
            </Box>
            <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

            <Box pt={5} sx={{ px: {xs: 3, sm: 15}}}>
                <Box component="img"
                    src={changePasswordIcon} />
                <Typography variant="body1" mt={1}>
                    Secure Password Rules
                </Typography>

                <List>
                    <ListItem disableGutters disablePadding >
                        <ListItemButton disableGutters >
                            <ListItemIcon>
                                <CheckCircleRoundedIcon sx={{ color: '#8DC641'}} />
                            </ListItemIcon>
                            <ListItemText sx={{ position: 'relative', ml: '-25px'}}>
                                <Typography variant="body2">
                                    Must not contain your name or email
                                </Typography>    
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding
                    sx={{ position: 'relative', mt: '-10px'}}>
                        <ListItemButton disableGutters>
                            <ListItemIcon>
                                <CheckCircleRoundedIcon sx={{ color: '#8DC641'}} />
                            </ListItemIcon>
                            <ListItemText sx={{ position: 'relative', ml: '-25px'}}>
                                <Typography variant="body2">
                                    At least 8 characters
                                </Typography>    
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding
                    sx={{ position: 'relative', mt: '-10px'}}>
                        <ListItemButton disableGutters>
                            <ListItemIcon>
                                <CheckCircleRoundedIcon  sx={{ color: '#8DC641'}}/>
                            </ListItemIcon>
                            <ListItemText sx={{ position: 'relative', ml: '-25px'}}>
                                <Typography variant="body2">
                                    Contains a symbol or a number
                                </Typography>    
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>

                <Stack direction='column' pt={1.5}>
                    <FormControl variant="outlined" sx={{ mt: 3}}>
                        <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
                        <OutlinedInput 
                            id="outlined-adornment-password"
                            sx={{ color: 'black'}}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                color="black"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            } label="current password"/>
                    </FormControl>

                    <FormControl variant="outlined" sx={{ mt: 3}}>
                        <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                        <OutlinedInput 
                            id="outlined-adornment-password"
                            sx={{ color: 'black'}}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                color="black"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            } label="new password"/>
                    </FormControl>                
                        
                    <RouterLink to='/Auth' state={{page: 'profileName' }} style={{ textDecoration: 'none', width: '10px !important' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 8, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Save new password
                        </Button>
                    </RouterLink>
                    
                    <RouterLink to='/Dashboard' state={{page: 'addFundsSuccessful' }} 
                    style={{ textDecoration: 'none', color: '#FF1515', marginTop: '40px', textAlign: 'center' }}>
                        Forgot Password?
                    </RouterLink>
                    </Stack>
                </Box>
            </Paper>
    )
}