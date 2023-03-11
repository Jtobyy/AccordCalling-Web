import { Paper, Typography, Box, Stack, FormControl, Radio, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ButtonGroup } from "@mui/material";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import React from "react";

import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import { BASE_URL_VOIPSWITCH, ENDPOINTS } from "..";


export default function ProfileName() {
    const location = useLocation();
    const props = location.state;

    // const handleSumbit = () => {
    //     axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['signup']}`, {
    //          login: String,
    //          password: String,
    //          webPassword: String,
    //          address: String = "",
    //          zipCode: String = "",
    //          city: String = "",
    //          taxID: String = "",
    //          eMail: String,
    //          phoneNumber: String,
    //          mobileNumber: String,
    //          tariffId: Int,
    //          accountState: Int = 0,
    //          generateInvoice: Boolean = false,
    //          sendInvoice: Boolean = false,
    //          country: String = "",
    //          state: String = "",
    //          firstName: String,
    //          lastName: String,
    //          callsLimit: Int = 0,
    //          postPaid: Boolean = false,
    //          postPaidCredit: Int = 0,
    //          postPaidDescription: String = "",
    //          resellerId: Int = 86
    //     })
    //     .then((res) => {
    //         const idClient = res['data']['idClient'];
            
    //         if (idClient === 0) {
    //             setValidLogin(false)
    //         }
    //         else {
    //             setValidLogin(true)
    
    //             sessionStorage.setItem('token', randomToken.create('oijfsdof82048f0wfj0wj0w8f24jf')(20))
    
    //             sessionStorage.setItem('firstName', res['data']['firstName'])
    //             sessionStorage.setItem('lastName', res['data']['lastName'])
    //             sessionStorage.setItem('login', login)
    //             sessionStorage.setItem('idClient', res['data']['idClient'])
    //             sessionStorage.setItem('creditBalance', res['data']['creditBalance'])
    //             sessionStorage.setItem('email', res['data']['email'])
    //         }
        
    //         console.log("Success")
    //     })
    //     .catch((err) => {console.log(err.message)})    
    // }    

    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               py: 10, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
               borderRadius:4 }}>
            <Stack direction='row' spacing={1}>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
            </Stack>

            <Typography variant="h5" fontWeight={700} mt={3.5}>Profile Name</Typography>
            <Typography variant="body2" mt={1} color="#2E368F">
                Fill in your profile name
            </Typography>

            <FormControl sx={{ pt: 3}}>
                <TextField id="outlined-basic" label="Profile Name" variant="outlined" />
            </FormControl>

            <Stack direction='column' pt={1.5}>
                <ButtonGroup orientation="vertical">
                    <RouterLink to='/Auth' state={{page: 'accountCreated' }} style={{ textDecoration: 'none', width: '10px !important' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Save
                        </Button>
                    </RouterLink>
                    <RouterLink to='/Auth' state={{page: 'accountCreated' }} style={{ textDecoration: 'none', width: '10px !important' }}>
                        <Button  color='success' variant="outlined"
                        sx={{  mt: 2.5, py: 1.5, color: '#8DC641', borderColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Skip
                        </Button>
                    </RouterLink>
                </ButtonGroup>
                    
                </Stack>
        </Paper>
    )
}