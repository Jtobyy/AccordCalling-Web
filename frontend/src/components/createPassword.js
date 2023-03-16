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


import React, { useEffect } from "react";

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


import { Link as RouterLink, Navigate } from 'react-router-dom';
import { useState } from "react";
import ScrollToTopOnMount from "./scrolltoview";


export default function CreatePassword() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
    const [allowToProfile, setAllowToProfile] = React.useState(false);

    const [check1, setCheck1] = React.useState(true);
    const [check2, setCheck2] = React.useState(false);
    const [check3, setCheck3] = React.useState(false);    

    const [validPassword, setValidPassword] = React.useState(true);
    const [validPasswordConfirmation, setValidPasswordConfirmation] = React.useState(true);


    useEffect(() => {
        document.getElementById('recaptchaContainer').style.visibility = 'hidden'
    })
    const handleClickShowPassword = () => setShowPassword((show) => !show);    

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password.length < 8) {
            setCheck2(false);
            setValidPassword(false);
        } else {
            setCheck2(true);
        }
        
        let specialChar = false
        for (let c of password) {
            // console.log(c)
            if ("!\"#@$%^&*(){}|\\:?;<>,.~`/1234567890".includes(c)) {
                specialChar = true
                setCheck3(true)
                setValidPassword(true);
                break
            }
        }
        if (!specialChar) {
            setCheck3(false)
            setValidPassword(false)
        }

        if (check1 && check2 && check3) {
            setValidPassword(true);
            if (password !== passwordConfirmation) setValidPasswordConfirmation(false);
            else setValidPasswordConfirmation(true);
        }

        if (check1 && check2 && check3 && validPassword && validPasswordConfirmation)        
            setAllowToProfile(true)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    if (allowToProfile)      
      return <Navigate to="/Auth" state={{ page: "profileName", password: password }} />
    else
    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               py: 10, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
               borderRadius: 4 }}>
            <ScrollToTopOnMount /> 
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
                            <CheckCircleRoundedIcon htmlColor={(
                                () => {if (check1) return '#8DC641'} )()}/>
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
                            <CheckCircleRoundedIcon htmlColor={(
                                () => {if (check2) return '#8DC641'} )()} />
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
                            <CheckCircleRoundedIcon htmlColor={(
                                () => {if (check3) return '#8DC641'} )()}/>
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
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput 
                        id="password"
                        sx={{ color: 'black'}}
                        error={!validPassword}
                        onChange={(e) => setPassword(e.target.value)}
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
                    <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                    <OutlinedInput 
                        id="confirm-password"
                        sx={{ color: 'black'}}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        error={!validPasswordConfirmation}
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
                    
                <Button onClick={(e) => {handleSubmit(e)}} color='success' variant="contained"
                sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                    Create Account
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