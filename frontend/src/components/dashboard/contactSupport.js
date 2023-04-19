import { Box, Paper, Typography, Stack, Button, Container, FormControl, Link } from "@mui/material";
import { List, ListItem, ListItemText, ListItemIcon, TextField } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import supportIcon from '../../images/supportIcon.svg';
import callIcon from '../../images/callIcon.svg';
import emailIcon from '../../images/emailIcon.svg';
import ScrollToTopOnMount from "../scrolltoview";


export default function ContactSupport() {
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
                    <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Contact Support</Typography>
                </Box>
                <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

                <Box px={3}>
                    <Stack direction='column' pt={1} textAlign="center">
                        <Box component='img'
                            src={supportIcon}
                            width='100px'
                            mx='auto' >
                        </Box>
                        <Typography variant="body2" >We are here to help, kindly get in touch with us</Typography>                
                        <List sx={{ width: 'fit-content', mx: 'auto' }} >
                                <ListItem
                                key={0}
                                sx={{ mt: 1, bgcolor: 'background.paper', borderRadius: 3}}
                                >
                                <Link display='flex' alignItems='center' href="https://api.whatsapp.com/send?phone=2349088999153">
                                    <ListItemIcon>
                                            <Box component='img'
                                                width='40px'                            
                                                src={callIcon} />
                                    </ListItemIcon>    
                                    <ListItemText  primary="+234 908 899 9153" />
                                </Link>    
                                </ListItem>
                                <ListItem
                                key={1}
                                sx={{ bgcolor: 'background.paper', borderRadius: 3}}
                                >
                                <Link display='flex' alignItems='center' href="mailto:support@accordcalling.io">     
                                    <ListItemIcon>
                                            <Box component='img'
                                                width='40px'                            
                                                src={emailIcon} />
                                    </ListItemIcon>  
                                    <ListItemText primary="support@accordcalling.io" />
                                </Link>
                                </ListItem>
                        </List>    
                    </Stack>
                </Box>
    </Paper>
    )
}