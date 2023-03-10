import { Box, Paper, Typography, Stack, Button, Container } from "@mui/material";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import callRecordsIcon from '../../images/callRecordsIcon.svg';
import editProfileIcon from '../../images/editProfileIcon.svg';
import changePasswordIcon from '../../images/changePasswordIcon.svg';


export default function MyAccount() {
    return (
            <Paper component="div"
            sx={{ display: 'flex', flexDirection: 'column',
            pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
            borderRadius:4 }}>

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
                <Typography variant="h6" mt={-2} >0803 567 0547</Typography>
                <Typography variant="body2" color='#929292'>08007565898</Typography>

                <Container  sx={{ display: 'flex', bgcolor: '#E7F7E1', borderRadius: 3, py: 1, mt: 3 }}>
                    <Box>
                        <Typography variant="body2" >Acct. Balance</Typography>
                        <Typography variant="h5" fontWeight={700}>$ 23.00</Typography>
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
                        <IconButton aria-label="comment">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    }
                    sx={{ my: 2, bgcolor: 'background.paper', borderRadius: 3}}
                    >
                        <ListItemText primary="Call records" />
                    </ListItem>
                    <ListItem
                    key={1}
                    sx={{ my: 2, bgcolor: 'background.paper', borderRadius: 3}}
                    secondaryAction={
                        <IconButton aria-label="comment">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    }
                    >
                        <ListItemText primary="Edit Profile" />
                    </ListItem>
                    <ListItem
                    key={2}
                    sx={{ my: 2, bgcolor: 'background.paper', borderRadius: 3}}
                    secondaryAction={
                        <IconButton aria-label="comment">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    }
                    >
                        <ListItemText primary="Change Password" />
                    </ListItem>
                </List>    
                <RouterLink to='/Dashboard' state={{page: 'addFundsSuccessful' }} 
                style={{ textDecoration: 'none', color: '#FF1515' }}>
                        Log out
                </RouterLink>
            </Stack>
        </Box>
    </Paper>
    )
}