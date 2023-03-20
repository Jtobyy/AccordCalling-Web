import { Box, Paper, Typography, Stack, Button, Container } from "@mui/material";
import { List, ListItem, ListItemText, ListItemIcon, IconButton, Link } from "@mui/material";

import { Link as RouterLink, Navigate } from "react-router-dom";

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import callRecordsIcon from '../../images/callRecordsIcon.svg';
import editProfileIcon from '../../images/editProfileIcon.svg';
import changePasswordIcon from '../../images/changePasswordIcon.svg';

import { useState, useEffect } from "react";
import { ENDPOINTS, BASE_URL_VOIPSWITCH } from "../..";
import axios from "axios";

import ScrollToTopOnMount from "../scrolltoview";


export default function MyAccount() {
    const username = sessionStorage.getItem('login')
    const [acctBalance, setAcctBalance] = useState(sessionStorage.getItem('creditBalance'))
    const phoneNumber = "..."

    const [loggedOut, setLoggedOut] = useState(false)
    
    useEffect(() => {
        axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['getBalance']}`, {
            clientType: 32,
            clientId: sessionStorage.getItem('idClient'),
            login: sessionStorage.getItem('login')
        })
        .then((res) => {
            // console.log(res)
            sessionStorage.setItem('creditBalance', res['data']['creditBalance']);
            setAcctBalance(res['data']['creditBalance']);
        
            // console.log("Success")
        })
        .catch((err) => {console.log(err.message)})
    });
        
    const logout = () => {    
        sessionStorage.clear()
        setLoggedOut(true)
    }

    if (loggedOut) 
        return <Navigate to="/Signin" />

    else
    return (
        <Paper component="div"
            sx={{ display: 'flex', flexDirection: 'column',
            pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
            borderRadius:4 }}>
        <ScrollToTopOnMount />
        <Box display='flex' px={3} pb={2} alignItems='center'>
            <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                <KeyboardBackspace sx={{ position: 'absolute' }}/>
            </RouterLink>
            <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>My Account</Typography>
        </Box>
        <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

        <Box px={3}>
            <Stack direction='column' pt={2} textAlign="center">
                <Box fontSize="80px" >
                    <AccountCircle fontSize="inherit" />
                </Box>
                <Typography variant="h6" mt={-2} >{username}</Typography>
                <Typography variant="body2" color='#929292'>{phoneNumber}</Typography>

                <Container  sx={{ display: 'flex', bgcolor: '#E7F7E1', borderRadius: 3, py: 1, mt: 3 }}>
                    <Box>
                        <Typography variant="body2" >Acct. Balance</Typography>
                        <Typography variant="h5" fontWeight={700}>$ {acctBalance}</Typography>
                    </Box>
                    <RouterLink to='/Dashboard' state={{page: 'addfunds' }} 
                                style={{ textDecoration: 'none', 
                                          padding: '0px', 
                                          marginTop: '-40px',
                                          marginLeft: 'auto'  }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none' }}>
                            Add Funds
                        </Button>
                    </RouterLink>
                </Container>            
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                    <ListItem
                    key={0}
                    secondaryAction={
                        <IconButton aria-label="call records">
                            <RouterLink to='/Dashboard' state={{ page: 'callrecords'}}>
                                <ArrowForwardIosIcon />
                            </RouterLink>
                        </IconButton>
                    }
                    sx={{ my: 2, bgcolor: 'background.paper', borderRadius: 3}}
                    >
                        <ListItemIcon>
                            <Box component='img'
                                 src={callRecordsIcon} />
                        </ListItemIcon>    
                        <ListItemText sx={{ ml: -1 }} primary="Call records" />
                    </ListItem>
                    <ListItem
                    key={1}
                    sx={{ my: 2, bgcolor: 'background.paper', borderRadius: 3}}
                    secondaryAction={

                        <IconButton aria-label="edit profile">
                            <RouterLink to='/Dashboard' state={{ page: 'editprofile'}}>
                                <ArrowForwardIosIcon />
                            </RouterLink>    
                        </IconButton>
                    }
                    >
                        <ListItemIcon>
                            <Box component='img'
                                    src={editProfileIcon} />
                        </ListItemIcon>  
                        <ListItemText sx={{ ml: -1 }} primary="Edit Profile" />
                    </ListItem>
                    <ListItem
                    key={2}
                    sx={{ my: 2, bgcolor: 'background.paper', borderRadius: 3}}
                    secondaryAction={
                        <IconButton aria-label="change password">
                            <RouterLink to='/Dashboard' state={{ page: 'changepassword'}}>
                                <ArrowForwardIosIcon />
                            </RouterLink>    
                        </IconButton>
                    }
                    >
                        <ListItemIcon>
                            <Box component='img'
                                 src={changePasswordIcon} />
                        </ListItemIcon>        
                        <ListItemText sx={{ ml: -1 }} primary="Change Password" />
                    </ListItem>
                </List>    

                <Box bgcolor="#F7F7F7" width='100%' height='10px'></Box>

                <Link
                onClick={logout}
                style={{ cursor: 'pointer', textDecoration: 'none', color: '#FF1515', marginTop: '20px' }}>
                        Log out
                </Link>
            </Stack>
        </Box>
    </Paper>
    )
}