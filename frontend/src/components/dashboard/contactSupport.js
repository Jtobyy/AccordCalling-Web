import { Box, Paper, Typography, Stack, Button, Container } from "@mui/material";
import { List, ListItem, ListItemText, ListItemIcon, IconButton } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import supportIcon from '../../images/supportIcon.svg';
import callIcon from '../../images/callIcon.svg';
import emailIcon from '../../images/emailIcon.svg';


export default function ContactSupport() {
    return (
            <Paper component="div"
            sx={{ display: 'flex', flexDirection: 'column',
            pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
            borderRadius:4 }}>

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
                        <ListItemIcon>
                            <a href="tel:+234 803 567 0547">
                                <Box component='img'
                                    width='40px'                            
                                    src={callIcon} />
                            </a>
                        </ListItemIcon>    
                        <ListItemText  primary="+234 803 567 0547" />
                    </ListItem>
                    <ListItem
                    key={1}
                    sx={{ bgcolor: 'background.paper', borderRadius: 3}}
                    >
                        <ListItemIcon>
                            <a href="mailto:hello@accordcalling.io"> 
                                <Box component='img'
                                    width='40px'                            
                                    src={emailIcon} />
                            </a>
                        </ListItemIcon>  
                        <ListItemText primary="hello@accordcalling.io" />
                    </ListItem>
                   
                </List>    
                

                <RouterLink to='/Dashboard' state={{page: 'myaccount' }}  style={{ textDecoration: 'none' }}>
                    <Button  color='success' variant="contained"
                    sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Send
                    </Button>
                </RouterLink>
            </Stack>
        </Box>
    </Paper>
    )
}