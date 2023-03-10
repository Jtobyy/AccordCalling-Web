import { Box, Paper, Stack, Typography, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"

import successIcon from '../../images/successIcon.svg';

import { Link as RouterLink } from "react-router-dom"

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';

export default function AddFunds() {
    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
               borderRadius:4 }}>

            <Box display='flex' px={3} alignItems='center'>
                <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                    <KeyboardBackspace sx={{ position: 'absolute' }}/>
                </RouterLink>
                <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Add Funds</Typography>
            </Box>
            <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

            <Box px={3}>
                <Stack direction='column' pt={6}>
                    
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" type='number' label="Enter Specific Amount" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" type='number' label="Card Number" variant="outlined" />
                    </FormControl>
                    <Stack direction='row' sx={{ pt: 3}}>
                        <FormControl >
                            <TextField id="outlined-basic" type='date' label="Expiration Date" variant="outlined" />
                        </FormControl>
                        <FormControl sx={{ pl: 3}}>
                            <TextField id="outlined-basic" type='number' label="CVV" variant="outlined" />
                        </FormControl>
                    </Stack>
                    
                    <RouterLink to='/Dashboard' state={{page: 'confirmAddFunds' }} style={{ textDecoration: 'none' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Make Payment
                        </Button>
                    </RouterLink>
                
                    
                </Stack>
            </Box>
        </Paper>
    )
}

export function AddFundsSuccessful() {
    return (
            <Paper component="div"
            sx={{ display: 'flex', flexDirection: 'column',
            pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
            borderRadius:4 }}>

        <Box display='flex' px={3} alignItems='center'>
            <RouterLink to='/Dashboard' state={{page: 'addfunds' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                <KeyboardBackspace sx={{ position: 'absolute' }}/>
            </RouterLink>
            <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Add Funds</Typography>
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