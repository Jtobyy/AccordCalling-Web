import { Box, Paper, Stack, Typography, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"
import Link from "@mui/material/Link"

import { Link as RouterLink, useLocation } from "react-router-dom"

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';

export default function ConfirmAddFunds() {
    const location = useLocation()    
    const props = location.state

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
                    <Typography variant="h5" fontWeight={700}>You are purchasing {props.amount} credit</Typography>
                    <RouterLink to='/Dashboard' state={{page: 'addFundsSuccessful' }}  style={{ textDecoration: 'none' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Confirm
                        </Button>
                    </RouterLink>
                    <RouterLink to='/Dashboard' state={{page: 'addfunds' }}  style={{ textDecoration: 'none' }}>
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