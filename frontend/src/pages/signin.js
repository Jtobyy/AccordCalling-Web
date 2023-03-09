import { Box, Grid, Typography, FormControl, InputAdornment, IconButton, TextField, OutlinedInput, InputLabel, Button } from "@mui/material";
import Link from "@mui/material/Link";
import signinImage1 from '../images/siginImage1.png';
import logo from '../images/accordLogo2.svg';
import { Stack } from "@mui/system";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import React from "react";
import { Link as RouterLink } from 'react-router-dom';


export default function Signin() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <Grid container>
            <Grid item xs={12} 
                       pt={5} sm={6}
                       bgcolor="#8DC641"
                       sx={{ px: {xs: 1, sm: 2}, 
                             height: {xs: 'default', sm: '100vh'},
                             display: {sm: 'flex'},
                             flexDirection: {sm: 'column'}
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
                <Box component="img" flexGrow={1} sx={{ width: {xs: 'calc(50vh - 100px)', sm: 300, md: 400}, 
                                    ml: {xs: 5, sm: -1}, 
                                    position: {xs: 'relative'}, 
                                    top: {xs: '3px'},
                                    
                                    }}
                                    src = {signinImage1} /> 
                                   
            </Grid>
            <Grid item xs={12} sm={6} sx={{ p: {xs: 5, sm: 6, md: 10} }}>
                <Box component='img'
                     src={logo} />
                <Typography variant='h3' pt={3} fontWeight={700} sx={{ fontSize: {xs: '2rem' }}}>Welcome Back!</Typography>
                <Typography color="#BBBABA" pt={1}>Please log in to continue</Typography>
                <Stack direction='column'>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" label="Username (Phone number)" variant="outlined" />
                    </FormControl>

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
                    <Link color="#2E368F" mt={3} textAlign="right" >
                        <RouterLink to="/Auth" state={{ page: 'forgotPassword' }}> 
                            Forgot your password?
                        </RouterLink>
                        </Link>
                    
                    <Button  color='success' href="#plans" variant="contained"
                    
                    sx={{  my: 3, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none' }}>
                        Log in
                    </Button>
            
                    <Typography mt={2}>
                        Don’t have an account?
                        <RouterLink to='/Auth' state={{ page: 'signup' }}> <Link color="#2E368F" variant="span">Sign up</Link></RouterLink>
                    </Typography>
                    
                </Stack>
            </Grid>
        </Grid>
        
    )
}