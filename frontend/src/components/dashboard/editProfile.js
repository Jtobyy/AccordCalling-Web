import { Box, Paper, Stack, Typography, TextField, MenuItem } from "@mui/material"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"

import { Link as RouterLink, Navigate } from "react-router-dom"
import React, { useState } from "react";

import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import { ENDPOINTS, BASE_URL_VOIPSWITCH } from "../..";

import axios from "axios";
import ScrollToTopOnMount from "../scrolltoview";

const countries = [
    {
        value: '+234',
        label: 'Nigeria',
    },
    {
        value: '+233',
        label: 'Ghana',
    },
    {
        value: '+255',
        label: 'Tanzania',
    },
]


export default class EditProfile extends React.Component {
    constructor() {
        super()    
        this.state = {
            country: '+234',
            firstName: '',
            lastName: '',
            state: '',
            zip: '',
            city: '',
            address: '',
            email: '',
            savedProfile: false,
            defaultCountry: 'Nigeria',
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()

        let country = this.state.country
        if (country == "+234") {country = this.state.defaultCountry}
        console.log(country)

        axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['editProfile']}`, {
            idClient: sessionStorage.getItem('idClient'),
            clientType: 32,
            personal: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                country: country,
                state: this.state.state,
                zip: this.state.zip,
                city: this.state.city,
                address: this.state.address,
                eMail: this.state.email,
            }
        })
        .then((res) => {
            // alert('workng')    
            console.log(res)    
    
            if (res['data']['responseStatus']) {
                console.log(res['data']['responseStatus']['message'])
            }
            else {
                sessionStorage.setItem('firstName', res['data']['personal']['firstName'])
                sessionStorage.setItem('lastName', res['data']['personal']['lastName'])

                this.setState({savedProfile: true})
            }
        })
        .catch((err) => {
            alert(err)    
            console.log(err.message)}
        )
    }

    render() {
    if (this.state.savedProfile)
        return <Navigate to="/Dashboard" state={{page: "myaccount"}} />    
    else
    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '800px'},
               borderRadius:4 }}>
            <ScrollToTopOnMount />
            <Box display='flex' px={3} alignItems='center'>
                <RouterLink to='/Dashboard' state={{page: 'myaccount' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                    <KeyboardBackspace sx={{ position: 'absolute' }}/>
                </RouterLink>
                <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Edit Profile</Typography>
            </Box>
            <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

            <Box component='form'
                px={3}
                autoComplete="on"
                onSubmit={(e) => {
                        this.handleSubmit(e)
                    }
                } 
                 >
                <Stack direction='column' pt={6} sx={{ px: {xs: 3, sm: 19} }}>
                    
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" 
                                    label="First Name" 
                                    onChange={(e) => this.setState({firstName: e.target.value})}
                                    variant="outlined" required/>
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" 
                                    label="Last name" 
                                    variant="outlined" 
                                    onChange={(e) => this.setState({lastName: e.target.value})}
                                    required/>
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" 
                                    type='email' 
                                    label="Email Address" 
                                    variant="outlined" 
                                    onChange={(e) => this.setState({email: e.target.value})}
                                    required/>
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" 
                                    label="Address" 
                                    variant="outlined" 
                                    onChange={(e) => this.setState({address: e.target.value})}
                                    required/>
                    </FormControl>
                    
                    <TextField
                        required
                        id="outlined-select-country"
                        select
                        label="Country"
                        defaultValue={this.state.country}
                        sx={{ mt: 3}}
                        onChange={(e) => this.setState({country: e.target.value})}
                        >
                            {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}</TextField>

                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" 
                                    label="State" 
                                    variant="outlined" 
                                    onChange={(e) => this.setState({state: e.target.value})}
                                    required/>
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" 
                                    label="City" 
                                    variant="outlined" 
                                    onChange={(e) => this.setState({city: e.target.value})}
                                    required/>
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" 
                                    label="Postal Code" 
                                    variant="outlined" 
                                    onChange={(e) => this.setState({zip: e.target.value})}
                                    required/>
                    </FormControl>
                    
                    <Button 
                    type='submit'
                    color='success' variant="contained"
                    sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Save
                    </Button>
                
                    
                </Stack>
            </Box>
        </Paper>
    )
}
}