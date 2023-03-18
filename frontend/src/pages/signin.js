import { Box, Grid, Typography, FormControl, InputAdornment, IconButton, TextField, OutlinedInput, InputLabel, Button } from "@mui/material";
import Link from "@mui/material/Link";
import signinImage1 from '../images/landingImage2.png';
import logo from '../images/accordLogo2.svg';
import { Stack } from "@mui/system";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import React from "react";
import { Link as RouterLink, Navigate } from 'react-router-dom';

import axios from "axios";
import randomToken from 'random-token';
import background from "../images/background.png";


import { BASE_URL_VOIPSWITCH, ENDPOINTS } from "..";


export default function Signin() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [validLogin, setValidLogin] = React.useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    const handleSubmit = () => {
        axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['login']}`, {
            login: login,
            password: password,
        })
        .then((res) => {
            const idClient = res['data']['idClient'];
            
            if (idClient === 0) {
                setValidLogin(false)
            }
            else {
                setValidLogin(true)

                sessionStorage.setItem('token', randomToken.create('oijfsdof82048f0wfj0wj0w8f24jf')(20))

                sessionStorage.setItem('firstName', res['data']['firstName'])
                sessionStorage.setItem('lastName', res['data']['lastName'])
                sessionStorage.setItem('login', login)
                sessionStorage.setItem('password', password)
                sessionStorage.setItem('idClient', res['data']['idClient'])
                sessionStorage.setItem('creditBalance', res['data']['creditBalance'])
                sessionStorage.setItem('email', res['data']['email'])
            }
        
            console.log("Success")
        })
        .catch((err) => {console.log(err.message)})
    };

    if (validLogin && sessionStorage.getItem('token') && sessionStorage.getItem('token') !== "undefined")
        return <Navigate to="/Dashboard" state={{ page: 'overview' }} />
    else
        return (
            <Grid container>
                <Grid item xs={12} 
                        sm={6}
                        sx={{ px: {xs: 1, sm: 2}, 
                                height: {xs: 'default', sm: '100vh'},
                                display: {sm: 'flex'},
                                pt: {xs: 5, sm: 15},
                                flexDirection: {sm: 'column'},
                                backgroundImage: `url(${background})`,
                                }}
                            >
                    <Typography variant='h2' 
                                align='center' 
                                lineHeight={1.1} 
                                fontWeight={700}
                                color='white'
                                sx={{ fontSize: {xs: '2.5rem', sm: '3rem', md: '4rem' }}}
                                >
                    Your Calls Just Got Exciting
                    </Typography>
                    <Box component="img"
                    flexGrow={1} sx={{ height: {sm: '80%'}, width: {xs: 'calc(50vh - 100px)', md: 'calc(80% - 50px)'}, 
                                        ml: {xs: 5, sm: -1, md: 10}, 
                                        position: {xs: 'relative'}, 
                                        top: {xs: '3px'},
                                        }}
                                        src = {signinImage1} /> 
                                    
                </Grid>
                <Grid item xs={12} sm={6} sx={{ p: {xs: 5, sm: 6, md: 10} }}>
                    <RouterLink to="/">
                        <Box component='img'
                            src={logo} />
                    </RouterLink>
                    
                    <Typography variant='h3' pt={3} fontWeight={700} sx={{ fontSize: {xs: '2rem' }}}>Welcome Back!</Typography>
                    <Typography color="#BBBABA" pt={1}>Please log in to continue</Typography>
                    <Box component='form'
                        autoComplete="on"
                        onSubmit={handleSubmit()}>
                        <Stack direction='column'>
                            <FormControl sx={{ pt: 3}} id="username" >
                                <TextField onChange={(e) => setLogin(e.target.value)}
                                        error={!validLogin}
                                        label="Username (Phone number)" 
                                        variant="outlined" 
                                         />
                            </FormControl>

                            <FormControl variant="outlined" sx={{ mt: 3}} required>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput 
                                    id="outlined-adornment-password"
                                    error={!validLogin}
                                    onChange={(e) => setPassword(e.target.value)}
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
                            <Link color="#2E368F" mt={3} textAlign="right" >
                                <RouterLink to="/Auth" state={{ page: 'forgotPassword' }}> 
                                    Forgot your password?
                                </RouterLink>
                                </Link>
                            
                            <Button type="submit" color='success' variant="contained"
                            sx={{ my: 3, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none' }}>
                                Log in
                            </Button>
                    
                            <Typography mt={2}>
                                Don’t have an account?
                                <RouterLink to='/Auth' state={{ page: 'signup' }}> <Link color="#2E368F" variant="span">Sign up</Link></RouterLink>
                            </Typography>
                            
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            
        )
}