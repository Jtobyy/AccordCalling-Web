import { Box, Button, IconButton, Typography, List, ListItem, ListItemText } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import Plans from "../plans";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL_VOIPSWITCH, ENDPOINTS } from "../..";

export default function Overview() {
    const firstName = sessionStorage.getItem('firstName')
    const [acctBalance, setAcctBalance] = useState(sessionStorage.getItem('creditBalance'))

    console.log(sessionStorage.getItem('idClient'))

    useEffect(() => {
        axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['getBalance']}`, {
            clientType: 32,
            clientId: sessionStorage.getItem('idClient'),
            login: sessionStorage.getItem('login')
        })
        .then((res) => {
            console.log(res)
            sessionStorage.setItem('creditBalance', res['data']['creditBalance']);
            setAcctBalance(res['data']['creditBalance']);
        
            console.log("Success")
        })
        .catch((err) => {console.log(err.message)})
    });
    

    return (
        <Box component='div'
             sx={{ mt: {xs: 0, sm: -3}}}>
            <Typography variant="h5" sx={{ py: {xs: 3, sm: 1}}} fontWeight={700}>Hello, {firstName}</Typography>
            <Box sx={{ bgcolor: 'white', borderRadius: 3, py: 1, px: 1.5 }}>
                <Box px={3}  sx={{ display: 'flex', alignItems: 'center', bgcolor: '#E7F7E1', borderRadius: 3, py: 1 }}>
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
                        sx={{  mt: 5, py: 1, px: {md: 7}, backgroundColor: '#8DC641', textTransform: 'none' }}>
                            Add Funds
                        </Button>
                    </RouterLink>
                </Box>
            </Box>
            <Typography variant="h6" sx={{ pb: {xs: 3, sm: 1}, pt: {xs: 3, sm: 2}}}  fontWeight={700}>Available Calling Plans</Typography>            
            <Plans set={0} />
            
            <List sx={{ width: '100%', mt: 0, bgcolor: 'transparent' }}>
                    <ListItem
                    key={1}
                    sx={{ my: 2, bgcolor: 'background.paper', borderRadius: 3, py: 2 }}
                    secondaryAction={
                        <IconButton aria-label="comment">
                            <RouterLink to='/Dashboard' state={{page: 'myaccount' }}  style={{ textDecoration: 'none' }}>
                                <ArrowForwardIosIcon />
                            </RouterLink>
                        </IconButton>
                    }
                    >
                        <ListItemText primary="My Account" />
                    </ListItem>
                    <ListItem
                    key={2}
                    sx={{ my: 2, bgcolor: 'background.paper', borderRadius: 3, py: 2 }}
                    secondaryAction={
                        <IconButton aria-label="comment">
                            <RouterLink to='/Dashboard' state={{page: 'contactsupport' }}  style={{ textDecoration: 'none' }}>
                                <ArrowForwardIosIcon />
                            </RouterLink>    
                        </IconButton>
                    }
                    >
                        <ListItemText primary="Contact Support" />
                    </ListItem>
                </List>
        </Box>
    )
}