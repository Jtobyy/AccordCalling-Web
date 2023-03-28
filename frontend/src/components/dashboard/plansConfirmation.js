import { Box, Paper, Stack, Typography, TextField } from "@mui/material"
import Button from "@mui/material/Button"

import successIcon from '../../images/successIcon.svg';
import failedIcon from '../../images/failed.svg';

import { Link as RouterLink, Navigate, useAsyncError, useLocation } from "react-router-dom"

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import ScrollToTopOnMount from "../scrolltoview";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

import { BASE_URL_VOIPSWITCH, BASE_URL_VOIPSWITCH2, ENDPOINTS } from "../..";
import sha1 from 'js-sha1';

export default function ConfirmBuyPlan(props) {
    const [planDescription, setPlanDescription] = useState('');
    const [madeRequest, setMadeRequest] = useState(false);
    const [planStatus, setPlanStatus] = useState(false);
    const [number2, setNumber] = useState('')
    const [planStatusMessage, setPlanStatusMessage] = useState('');

    if (planDescription !== "") {
        document.getElementById("progress").style.visibility = "hidden"
    }

    useEffect(() => {
        axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['getPlanData']}`, {
          id: props.plan
        })
        .then((res) => {
        //   console.log(res['data'])
          setPlanDescription(res['data']['plan']['name'])
        })
      })

    const addNumber = () => {
        if (props.plan == 6 || props.plan == 7 || props.plan == 8) {
            let techPrefix = ""    
            if (props.plan == 6) {
                axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['getNumberList']}`, {
                    "areaId":0,
                    "countryId":17,
                    "number":"*",
                    "pageOffset":0,
                    "pageSize":0
                  })
                  .then((res) => {
                    let  i = -1;
                    let number = ''
                    do {
                        i++    
                        number = res['data']['data'][i]['number']
                    } while(res['data']['data'][i]['status'] !== "Available" 
                            && i < (res['data']['data']).length - 1);
                    
                    if (res['data']['data'].length - 1 === i)  {
                        if (res['data']['data'][i]['status'] === "Available" ) {
                            alert('no numbers available')
                        }
                    } else {
                        // console.log(number)
                        setNumber(number)
                        techPrefix=`CP:!${number};DP:0->234 OR +->;TP:`
                        let authorization = ""

                        if (sessionStorage.getItem("password"))
                            authorization = "Basic " + btoa(sessionStorage.getItem('login') + ":" + sha1(sessionStorage.getItem("password")))
                        else alert('password missing, please re-login to sync data.')
                        
                        // console.log(authorization)

                        axios.post(`${BASE_URL_VOIPSWITCH2}${ENDPOINTS['buyNumber']}`, {
                            "countryId":17, "purches": [
                                {"quantity":1,"phoneNumber":number, "areaCode":"01", "countryPhoneCode":"234", "countryCode":"234", "areaName":"", "voxboneGroupId":0,"localAreaId":0,"cnam":"", "channels":0,"dIDWWUniqueCode":"", "nPA":"", "nXX":"", "city":"", "stateCode":"", "phoneGroup":"", "resellerId":84,"resellerLevel":0}],"resellerDb":"", "promotion":false,"resellerRetailClient":"", "subscription":false
                          }, { headers: { 
                            "Authorization": authorization}
                          })
                          .then((res) => {
                            // console.log(res['data']['data'][0]['status'])
                            if (res['data']['data'][0]['status']) {
                                alert('incoming number attached.')
                                // console.log(res['data']['data'][0]['did'])
                                // console.log('resp from buyNumber ', res)
                            }
                            else alert(res['data']['data'][0]['message'])
                          })
                          .catch((err) => {
                            alert('incoming call number error')
                            console.log(err)
                            
                          })
                    }

                  })    
                  .catch((err) => {
                    alert('could not map number for incoming')
                    console.log(err)
                  })
            } else if (props.plan == 7) {
                techPrefix = "CP:!0596922322;DP:0->566 OR +->;TP:"
            } else if (props.plan == 8) {
                techPrefix = "CP:!0699996799;DP:0->567 OR +->;TP:"
            }    
            axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['setDid']}`, {
                clientId: sessionStorage.getItem('idClient'),
                techPrefix: techPrefix,
              })
            .then((res) => {
                if (res['data']['status'] === -1) {
                    alert('number not linked')
                    setPlanStatus(true)
                    setMadeRequest(true)
                }
                else {
                    setPlanStatus(true)
                    setMadeRequest(true)    
                    alert('outgoing number linked successfully')
                }
                
            })
            .catch((err) => {
                console.log(err)
                // alert('error while linking number')
                setPlanStatus(true)
                setMadeRequest(true)
            })
        }
    }

    const addPlan = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['addPlan']}`, {
            clientId: sessionStorage.getItem('idClient'),
            clientType: 32,
            planId: props.plan
          })
          .then((res) => {
            // console.log(res['data'])
            if (res['data']['status'] === -1) {
                setPlanStatus(false)    
                setMadeRequest(true)
                setPlanStatusMessage(res['data']['responseStatus']['message'])
            } else {
                addNumber()
            }
          })
          .catch((err) => {console.log(err)})
    }

    if (madeRequest && planStatus) 
        return <Navigate to='/Dashboard' state={{page: 'buyPlanSuccessful', number: number2}} />
    else if (madeRequest && !planStatus)
        return <Navigate to='/Dashboard' 
                state={{page: 'buyPlanFailed',
                message: planStatusMessage}} />
    else
    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
               borderRadius:4 }}>
            <ScrollToTopOnMount />
            <Box display='flex' px={3} alignItems='center'>
                <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                    <KeyboardBackspace sx={{ position: 'absolute' }}/>
                </RouterLink>
                <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Calling Plans</Typography>
                <CircularProgress id="progress" color="success" sx={{ position: 'relative', bottom: '10px', height: "10px", width: "10px"}} />
            </Box>
            <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

            <Box px={3}>
                <Stack direction='column' pt={6} textAlign="center">
                    {/* <Typography variant="body1" fontWeight={700}>{props.country}</Typography>     */}
                    <Typography variant="h5" fontWeight={700}>You are purchasing the calling plan: {planDescription}</Typography>
                    {/* <RouterLink to='/Dashboard' state={{page: 'buyPlanSuccessful' }}  style={{ textDecoration: 'none' }}> */}
                    <Button onClick={addPlan} color='success' variant="contained"
                    sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Confirm
                    </Button>
                    {/* </RouterLink> */}
                    <RouterLink to='/Dashboard' state={{page: 'overview' }}  style={{ textDecoration: 'none' }}>
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

export function BuyPlanSuccessful(props) {
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
                        <Typography variant="body1" fontWeight={700}>Plan has been added to your account</Typography>
                        {(() => { 
                            if (props.number) {
                                return (
                                        <Typography variant="body1" mt={2}>
                                            Your number is: <Typography variant="h4">{props.number}</Typography>
                                        </Typography>)
                            }})()}
                        
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

export function BuyPlanFailed(props) {
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
                <Typography variant="h5" pt={3} fontWeight={700}>Request not successful</Typography>    
                <Typography variant="body1" >{props.message}</Typography>
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
