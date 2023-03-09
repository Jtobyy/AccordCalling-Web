import { Container, Stack, Box } from "@mui/material";
import React from "react";
import Signup from "../components/signup";

import { useLocation } from "react-router-dom";

import logo from "../images/accordLogo3.svg";
import Otp from "../components/otp";
import CreatePassword from "../components/createPassword";
import ProfileName from "../components/setProfileName";
import TellStatus from "../components/tellStatus";
import ResetPassword from "../components/resetPassword";
import ForgotPassword from "../components/forgotPassword";

export default function Auth() {
    const location = useLocation();
    const props = location.state;

    return(
        <Container disableGutters sx={{ bgcolor: '#6B9E27', pt: 7, pb: 10, minHeight: '100vh', height: '100%'}}>
            <Stack direction='column' alignItems='center'>
                <Box component="img" 
                        sx={{ width: '80px'}}
                        src = {logo} /> 
                <Box>
                    {(() => {
                        if (props.page === "signup")
                            return <Signup  />
                        else if (props.page === "otp")
                            return <Otp number = {props.number}/>
                        else if (props.page === "createPassword")
                            return <CreatePassword />
                        else if (props.page === "profileName")
                            return <ProfileName />
                        else if (props.page === "resetPassword")
                            return <ResetPassword  />
                        else if (props.page === "forgotPassword")
                            return <ForgotPassword  />

                        else if (props.page === "accountCreated")
                            return <TellStatus status = 'accountCreated' />                            
                    })()}
                </Box>
            </Stack>
        </Container>
    )
}