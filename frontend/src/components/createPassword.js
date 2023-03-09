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


import { Link as RouterLink } from 'react-router-dom';
import { useState } from "react";

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

export default function CreatePassword() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [number, setNumber] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               py: 10, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
               borderRadius: 4 }}>
            <Stack direction='row' spacing={1}>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#EEEEEE" width='52px' height='2px'></Box>
            </Stack>

            <Typography variant="h5" fontWeight={700} mt={3.5}>Create a Secure Password</Typography>
            <Typography variant="body2" mt={1} color="#2E368F">
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
                            <CheckCircleRoundedIcon />
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
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                        } label="password"/>
                </FormControl>

                <FormControl variant="outlined" sx={{ mt: 3}}>
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
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
                        } label="confirm password"/>
                </FormControl>                
                    
                <Typography variant="body2" mt={3} >
                    By clicking create account you agree to our 
                    <Link color="#2E368F"> Terms and Conditions</Link> and <Link color="#2E368F">Privacy Statement</Link>
                </Typography>
                    
                    <RouterLink to='/Auth' state={{page: 'profileName' }} style={{ textDecoration: 'none', width: '10px !important' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Create Account
                        </Button>
                    </RouterLink>
                
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