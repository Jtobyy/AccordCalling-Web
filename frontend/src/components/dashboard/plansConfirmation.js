import { Box, Paper, Stack, Typography, TextField } from "@mui/material"
import Button from "@mui/material/Button"

import successIcon from '../../images/successIcon.svg';
import failedIcon from '../../images/failed.svg';

import { Link as RouterLink, useLocation } from "react-router-dom"

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';

export default function ConfirmBuyPlan(props) {

    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
               borderRadius:4 }}>

            <Box display='flex' px={3} alignItems='center'>
                <RouterLink to='/Dashboard' state={{page: 'addfunds' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                    <KeyboardBackspace sx={{ position: 'absolute' }}/>
                </RouterLink>
                <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Calling Plans</Typography>
            </Box>
            <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

            <Box px={3}>
                <Stack direction='column' pt={6} textAlign="center">
                    <Typography variant="body1" fontWeight={700}>{props.country}</Typography>    
                    <Typography variant="h5" fontWeight={700}>You are purchasing ${props.price} calling plan</Typography>
                    <RouterLink to='/Dashboard' state={{page: 'buyPlanSuccessful' }}  style={{ textDecoration: 'none' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Confirm
                        </Button>
                    </RouterLink>
                    <RouterLink to='/Dashboard' state={{page: 'buyPlanFailed' }}  style={{ textDecoration: 'none' }}>
                        <Button  color='success' variant="outlined"
                        sx={{  mt: 3, py: 1.5, color: '#8DC641', borderColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Cancel
                        </Button>
                    </RouterLink>
                </Stack>
            </Box>
        </Paper>
    )
}

export function BuyPlanSuccessful() {
    return (
            <Paper component="div"
            sx={{ display: 'flex', flexDirection: 'column',
            pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
            borderRadius:4 }}>

        <Box display='flex' px={3} alignItems='center'>
            <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                <KeyboardBackspace sx={{ position: 'absolute' }}/>
            </RouterLink>
            <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Calling Plans</Typography>
        </Box>
        <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

        <Box px={3}>
            <Stack direction='column' pt={6} textAlign="center">
                <Box component='img'
                        width={120}
                        mx='auto'
                        src={successIcon} />
                <Typography variant="h5" fontWeight={700}>Success!</Typography>    
                <RouterLink to='/Dashboard' state={{page: 'myaccount' }}  style={{ textDecoration: 'none' }}>
                    <Button  color='success' variant="contained"
                    sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Okay, Thank you
                    </Button>
                </RouterLink>
            </Stack>
        </Box>
    </Paper>
    )
}

export function BuyPlanFailed() {
    return (
            <Paper component="div"
            sx={{ display: 'flex', flexDirection: 'column',
            pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
            borderRadius:4 }}>

        <Box display='flex' px={3} alignItems='center'>
            <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                <KeyboardBackspace sx={{ position: 'absolute' }}/>
            </RouterLink>
            <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Calling Plans</Typography>
        </Box>
        <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

        <Box px={3}>
            <Stack direction='column' pt={6} textAlign="center">
                <Box component='img'
                        width={120}
                        mx='auto'
                        src={failedIcon} />
                <Typography variant="h5" pt={3} fontWeight={700}>Insufficient funds</Typography>    
                <Typography variant="body1" >Sorry! You do not have sufficient balance </Typography>
                <RouterLink to='/Dashboard' state={{page: 'addfunds' }}  style={{ textDecoration: 'none' }}>
                    <Button  color='success' variant="contained"
                    sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Add funds
                    </Button>
                </RouterLink>
            </Stack>
        </Box>
    </Paper>
    )
}