import { Paper, Typography, Box, Stack, FormControl, Radio, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ButtonGroup } from "@mui/material";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import React, { useState } from "react";

import { Link as RouterLink, Navigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import randomToken from "random-token";
import axios from "axios";

import { BASE_URL_VOIPSWITCH, ENDPOINTS } from "..";
import ScrollToTopOnMount from "./scrolltoview";


export default function ProfileName(props) {
    const [success, setSuccess] = useState(false)
    const [displaySignin, setDisplaySignin] = useState('none')
    const [firstName, setFirstName] = useState('')
    // console.log(props.password)

    const handleSumbit = (e) => {
        e.preventDefault()
        
        axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['signup']}`, {
             login: sessionStorage.getItem('number'),
             password: props.password,
             webPassword: "",
             address: "",
             zipCode:  "",
             city: "",
             taxID: "",
             eMail: "",
             phoneNumber: "",
             mobileNumber: "",
             tariffId: 93,
             accountState: 0,
             generateInvoice: false,
             sendInvoice: false,
             country: "",
             state: "",
             firstName: firstName,
             lastName: "",
             callsLimit: 0,
             postPaid: false,
             postPaidCredit: 0,
             postPaidDescription: "",
             resellerId: 0
        })
        .then((res) => {
            if (res['data']['responseStatus']) {
                console.log('failed to create account')
                console.log(res['data']['responseStatus']['errorCode'])
                alert(res['data']['responseStatus']['message'])
                setDisplaySignin('visible')
            } else {
                console.log('got here')
                sessionStorage.setItem('token', randomToken.create('oijfsdsf9284249df82048f0wfj0wj0w8f24jf')(20))

                sessionStorage.setItem('login', res['data']['idClient'])
                sessionStorage.setItem('idClient', res['data']['idClient'])
                
                if (firstName !== "")
                    sessionStorage.setItem('firstName', firstName)

                setSuccess(true)
                console.log("Success")    
            }
        })
        .catch((err) => {console.log(err)})    
    }    

    if (success)
        return <Navigate to="/Auth" state={{ page: "accountCreated"}} />
    else
    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               py: 10, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
               borderRadius:4 }}>
            <ScrollToTopOnMount />
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
                <TextField id="outlined-basic" 
                            onChange={(e) => {setFirstName(e.target.value)}} label="Profile Name" variant="outlined" />
            </FormControl>

            <Stack direction='column' pt={1.5}>
                <ButtonGroup orientation="vertical">
                    <Button onClick={(e) => handleSumbit(e)} color='success' variant="contained"
                    sx={{  mt: 7.5, mb: 3, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Save
                    </Button>
                    
                    <Button onClick={(e) => handleSumbit(e)} color='success' variant="outlined"
                    sx={{  py: 1.5, color: '#8DC641', borderColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Skip
                    </Button>
                </ButtonGroup>
                </Stack>
                <Typography mt={5} visibility={displaySignin}>User already exists 
                    <RouterLink to="/Signin" > sign in</RouterLink>
                </Typography>
        </Paper>
    )
}