import { Paper, Typography, Box, Stack } from "@mui/material";

import Button from "@mui/material/Button";

import { Link as RouterLink } from 'react-router-dom';

import { useLocation } from "react-router-dom";


export default function Otp() {
    const location = useLocation();
    const props = location.state;

    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               py: 10, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
               borderRadius:4 }}>
            <Stack direction='row' spacing={1}>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#EEEEEE" width='52px' height='2px'></Box>
                <Box bgcolor="#EEEEEE" width='52px' height='2px'></Box>
            </Stack>

            <Typography variant="h5" fontWeight={700} mt={3.5}>Enter Verification Code</Typography>
            <Typography variant="body2" mt={3} color="#2E368F">
                Verification code was sent to {props.number}
            </Typography>

            <Stack direction='column' pt={6}>
                <Stack justifyContent='space-between' direction='row' sx={{ fontSize: '1.3rem'}}>
                    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', 
                                               justifyContent: 'center', width:'60px', height:'60px'}}>0</Paper>
                    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', 
                                               justifyContent: 'center', width:'60px', height:'60px'}}>5</Paper>
                    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', 
                                               justifyContent: 'center', width:'60px', height:'60px'}}>8</Paper>
                    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', 
                                               justifyContent: 'center', width:'60px', height:'60px'}}>6</Paper>
                </Stack>
                <Typography variant="body2" mx='auto' mt={3}>Code expires in :30</Typography>

                <RouterLink to='/Auth' state={{page: 'createPassword' }} style={{ textDecoration: 'none' }}>
                    <Button  color='success' variant="contained"
                    sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Verify
                    </Button>
                </RouterLink>
                <Stack mt={4} color="#2E368F" direction="row" justifyContent="space-between">
                    <Typography variant="body2" >
                        Send code again
                    </Typography>
                    <RouterLink to="/Auth" state={{page: 'signup'}}>
                        <Typography variant="body2" >
                            Change phone number
                        </Typography>
                    </RouterLink>
                </Stack>
                
            </Stack>
        </Paper>
    )
}