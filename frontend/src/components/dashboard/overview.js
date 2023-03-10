import { Box, Button, IconButton, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import Plans from "../plans";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Overview() {
    return (
        <Box component='div'>
            <Typography variant="h5" sx={{ py: {xs: 3, sm: 5}}} py={3} fontWeight={700}>Hello, ChiChi</Typography>
            <Box sx={{ bgcolor: 'white', borderRadius: 3, py: 1, px: 1.5 }}>
                <Box px={3}  sx={{ display: 'flex', bgcolor: '#E7F7E1', borderRadius: 3, py: 2 }}>
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
                        sx={{  mt: 5, py: 1.5, px: {md: 7}, backgroundColor: '#8DC641', textTransform: 'none' }}>
                            Add Funds
                        </Button>
                    </RouterLink>
                </Box>
            </Box>
            <Typography variant="h6" py={3} fontWeight={700}>Available Calling Plans</Typography>            
            <Plans />
            
            <List sx={{ width: '100%', mt: 5, bgcolor: 'transparent' }}>
                    <ListItem
                    key={0}
                    secondaryAction={
                        <IconButton aria-label="comment">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    }
                    sx={{ my: 2, bgcolor: 'background.paper', borderRadius: 3, py: 2 }}
                    >
                        <ListItemText primary="Buy Number" />
                    </ListItem>
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