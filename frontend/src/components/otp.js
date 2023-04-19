import { Paper, Typography, Box, Stack, getCircularProgressUtilityClass } from "@mui/material";

import Button from "@mui/material/Button";
import { useEffect } from "react";

import { Link as RouterLink, Navigate } from 'react-router-dom';

import { useLocation } from "react-router-dom";
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useDeviceLanguage } from 'firebase/auth';
import { CircularProgress } from "@mui/material";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmc2Wb3MHYBsru4MJ0Ej8fCS5anPnM5cE",
    authDomain: "localhost",
    // authDomain: "accordcalling.nativetalkapp.com",
    projectId: "accordcalling-web",
    storageBucket: "accordcalling-web.appspot.com",
    messagingSenderId: "111446254273",
    appId: "1:111446254273:web:0c96f11dcb5f4765b52a40",
    measurementId: "G-Y4NYKVJS2Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const auth = getAuth(app);


export default function Otp() {
    const [otp, setOtp] = useState('')
    const [forceReload, setForceReload] = useState(false)
    const [verified, setVerified] = useState(false)

    const number = useState(sessionStorage.getItem('number'))

    // window.location.reload()    
    const handleChange = (newValue) => {
        setOtp(newValue)
      }
        
    auth.useDeviceLanguage()

    useEffect(() => {        
        document.getElementById('recaptchaContainer').style.visibility = 'visible'
        window.recaptchaVerifier = new RecaptchaVerifier('recaptchaContainer', {
            'size': 'normal',
            'callback': (response) => {
                
            },
            'expired-callback': () => {
    
            }
        }, auth);

        const appVerifier = window.recaptchaVerifier
        signInWithPhoneNumber(auth, sessionStorage.getItem('number'), appVerifier)
        .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log('sms sent')
        console.log(confirmationResult)
        // ...
        }).catch((error) => {
            // grecaptcha.reset(window.recaptchaWidgetId);
            console.log(error)
            console.log('error on sms')
            // Or, if you haven't stored the widget ID:
            window.recaptchaVerifier.render().then(function(widgetId) {
                // grecaptcha.reset(widgetId);
            });        
        });
    }, [forceReload])

    const signup = (e) => {
        e.preventDefault();
        document.getElementById("reverify").style.visibility = "hidden"
        
        if (otp != "") {
            if (window.confirmationResult) {
                document.getElementById("circularProgress").style.visibility = "visible"
                window.confirmationResult.confirm(otp)
                .then((result) => {
                    console.log('user is ' + result.user)
                    setVerified(true)
                    document.getElementById("circularProgress").style.visibility = "hidden"
                })
                .catch((error) => {
                    document.getElementById("reverify").style.visibility = "visible"
                    console.log(error.message)
                    document.getElementById("circularProgress").style.visibility = "hidden"
                })
            }    
            else 
                document.getElementById("reverify").style.visibility = "visible"
        }
        
    }

    if (verified)
        return <Navigate to="/Auth" state={{ page: 'createPassword' }} />
    else
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
            
            <Typography visibility='' variant="body2" mt={3} color="#2E368F">
                Verify recaptcha, then input the otp verification code sent to {number}
            </Typography>
            <Stack component='form' onSubmit={(e) => signup(e)} direction='column' pt={6}>
                {/* <Stack justifyContent='space-between' direction='row' sx={{ fontSize: '1.3rem'}}>
                    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', 
                                               justifyContent: 'center', width:'60px', height:'60px'}}>0</Paper>
                    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', 
                                               justifyContent: 'center', width:'60px', height:'60px'}}>5</Paper>
                    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', 
                                               justifyContent: 'center', width:'60px', height:'60px'}}>8</Paper>
                    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', 
                                            justifyContent: 'center', width:'60px', height:'60px'}}>6</Paper>
                </Stack> */} 

                <MuiOtpInput display='flex' gap={1} length={6} value={otp} onChange={handleChange} />
                <Button type='submit' id="sign-up-button" color='success' variant="contained"
                sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                    Verify
                </Button>
                <Typography id="reverify" visibility='hidden' pt={1} color='red' variant='body2'>reverify recaptcha</Typography>
                 
                <CircularProgress id="circularProgress" sx={{ visibility:"hidden", position: "relative", left: {xs: "120px", md: "150px"}, top: '20px' }} color="success" />
                
                <Stack mt={4} color="#2E368F" direction="row" justifyContent="space-between">
                    {/* <Typography variant="body2" >
                        Send code again
                    </Typography> */}
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