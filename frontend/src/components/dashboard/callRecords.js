import { Box, Paper, Typography, Stack, Button, Container } from "@mui/material";
import { List, ListItem, ListItemText, ListItemIcon, IconButton } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import supportIcon from '../../images/supportIcon.svg';
import callIcon from '../../images/callIcon.svg';
import emailIcon from '../../images/emailIcon.svg';


export default function CallRecords() {
    return (
            <Paper component="div"
            sx={{ display: 'flex', flexDirection: 'column',
            pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
            borderRadius:4 }}>

        <Box display='flex' px={3} pb={2} alignItems='center'>
            <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                <KeyboardBackspace sx={{ position: 'absolute' }}/>
            </RouterLink>
            <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Call Records</Typography>
        </Box>
        <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

        <Box px={3}>
            
        </Box>
    </Paper>
    )
}